import React from 'react'
import {
    useStyle
} from 'react'

const TodoBlock = ({w, h, scale, text, i}) => {
    const {blockStyle} = useStyle(scale, w, h)
    return (
        <div style = {blockStyle(i)}>
          {text}
        </div>
    )
}

export default TodoBlock 