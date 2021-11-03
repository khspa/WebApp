import React from 'react'
import './Button.scss'

function CircleButton({children, style, onClick}) {

    return (
        <div style={style} className="circle-btn" onClick={onClick}>
            <span>{children}</span>
        </div>
    )
}

export default CircleButton
