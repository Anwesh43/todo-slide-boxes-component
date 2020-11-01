import {
    useState, 
    useEffect
} from 'react'

export const useAnimatedScale = (scGap = 0.02, delay = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [i, setI] = useState(0)
    return {
        i,
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale 
                const interval = setInterval(() => {
                    currScale += scGap 
                    if (Math.abs(currScale) > 1) {
                        setAnimated(false)
                        setScale(0)
                        clearInterval(interval)
                    }
                })
            }
        }
    }
}