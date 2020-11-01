import React from 'react'
import {
    useAnimatedScale, 
    useDimension
} from './hooks'
import TodoBlock from './TodoBlock'

const TodoSlideBoxApp = () => {
    const {w, h} = useDimension()
    const {scale, i, todos, start} = useAnimatedScale(0.02, 20)
    return (
      <div>
          <input type = "text" onBlur = {
            (e) => {
                if (e.target.value.trim() !== "") {
                    start(e.target.value.trim())
                }
            }
          }/>
          {todos.map((todo, i) => <TodoBlock w = {w} h = {h} scale = {1} i = {i} text = {todo}/>)}
          
          {i < todos.length ? (<TodoBlock scale = {scale} w = {w} h = {h} i = {0}/>) : null}
      </div>
    )
}

export default TodoSlideBoxApp