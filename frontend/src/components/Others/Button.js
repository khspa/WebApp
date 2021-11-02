import React from 'react'
import './Button.scss'

function CircleButton({children}) {
    return (
        <div className="circle-btn">
            <span>{children}</span>
        </div>
    )
}

export default CircleButton
