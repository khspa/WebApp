import React from 'react'
import './ButtonLink.scss'

export function ButtonContainer({children}) {
    return (
        <div className="btn-container">
            {children}
        </div>
    )
}

export function Button({prefix, children, bgColor, textColor}) {
    return (
        <div 
            className="link-btn" 
            style={
                    {
                        backgroundColor: bgColor,
                        color: textColor
                    }
                    }
        >
            {prefix && <span> {prefix} </span>}
            <div> {children} </div>
        </div>
    )
}