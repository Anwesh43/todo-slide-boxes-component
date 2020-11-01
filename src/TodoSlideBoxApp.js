import React from 'react'
import {
    useAnimatedScale, 
    useDimension
} from './hooks'
import TodoBlock from './TodoBlock'

const TextBox = ({disabled, onBlur}) => {
    if (disabled) {
        console.log("disabled", disabled)
        return <input disabled type = "text" onBlur = {onBlur}/>
    }
    return <input type = "text" onBlur = {onBlur}/>
} 

const TodoSlideBoxApp = () => {
    const {w, h} = useDimension()
    const {scale, i, todos, start, disabled, text} = useAnimatedScale(0.02, 20)
    return (
      <div>
          <TextBox disabled = {disabled} onBlur = {
            (e) => {
                if (e.target.value.trim() !== "") {
                    start(e.target.value.trim())
                }
            }
          }/>
          {todos.map((todo, i) => <TodoBlock key = {`text_${i}`} w = {w} h = {h} scale = {1} i = {i} text = {todo}/>)}
          
          {text ? (<TodoBlock text = {text} scale = {scale} w = {w} h = {h} i = {i}/>) : null}
      </div>
    )
}

export default TodoSlideBoxApp