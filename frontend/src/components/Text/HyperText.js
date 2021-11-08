import React from 'react'
import './Text.scss'

function HyperText({children, href}) {
    return (
        <a className="hyper-text" href={href}>
            {children}
        </a>
    )
}

export default HyperText
