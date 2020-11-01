import React from 'react'
import {
    useStyle
} from './hooks'

const TodoBlock = ({w, h, scale, text, i}) => {
    const {blockStyle} = useStyle(scale, w, h)
    //console.log(blockStyle)
    return (
        <div style = {blockStyle(i)}>
          {text}
        </div>
    )
}

export default TodoBlock 