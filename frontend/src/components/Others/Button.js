import React from 'react'
import './Button.scss'

function CircleButton({children, onClick}) {

    return (
        <div className="circle-btn" onClick={onClick}>
            <span>{children}</span>
        </div>
    )
}

export default CircleButton
