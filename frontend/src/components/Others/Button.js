import React from 'react'
import './Button.scss'

function CircleButton({children, show, onClick}) {

    return (
        <div className={`circle-btn ${show ? "show":"hide"}`} onClick={onClick}>
            <span>{children}</span>
        </div>
    )
}

export default CircleButton
