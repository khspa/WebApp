import React from 'react'
import './ButtonLink.scss'

export function ButtonContainer({children, direction}) {
    return (
        <div className={`btn-container ${direction}`}>
            {children}
        </div>
    )
}

export function Button({prefix, children, bgColor, textColor, shape}) {
    return (
        <div 
            className={`link-btn ${shape}`} 
            style={
                    {
                        backgroundColor: bgColor,
                        color: textColor
                    }
                    }
        >
            {prefix && <span> {prefix} </span>}
            {children && <div> {children} </div>}
        </div>
    )
}