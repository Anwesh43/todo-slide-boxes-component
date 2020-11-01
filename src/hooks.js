import {
    useState, 
    useEffect
} from 'react'
import {
    sinify, 
    divideScale
} from './utils'

export const useAnimatedScale = (scGap = 0.02, delay = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [i, setI] = useState(0)
    const [todos, setTodos] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [text, setText] = useState(null)
    return {
        i,
        scale, 
        todos,
        disabled,
        text,
        start(todo) {
            if (!animated) {
                setDisabled(true)
                setAnimated(true)
                setText(todo)
                let currScale = scale 
                const interval = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                    if (Math.abs(currScale) > 1) {
                        setAnimated(false)
                        setScale(0)
                        clearInterval(interval)
                        setDisabled(false)
                        setI(i + 1)
                        setTodos([...todos, todo])
                        setText(null)
                        console.log("resetting")
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (scale, w, h) => {
    const sizeFactor = 10
    const hSize = h / 10 
    const offset = hSize / 2 
    const position = 'absolute'
    const background = '#673AB7'
    const color = 'white'
    const maxFontSize = Math.min(w, h) / 28 
    const sf1 = divideScale(scale, 0, 2)
    const sf2 = divideScale(scale, 1, 2)
    return {
        blockStyle(i) {
            const left = `${0}px`
            const top = `${hSize * (2 * i + 1)}px`
            const height = `${hSize}px`
            const width = `${w * sf1}px`
            const textAlign = 'center'
            const fontSize = `${maxFontSize * sf2}px`
            return {
                position,
                left, 
                top,
                width,
                height, 
                fontSize, 
                textAlign,
                background, 
                color 
            }
        }
    }
}