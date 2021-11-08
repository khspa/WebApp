import React from 'react'
import "./Text.scss"

function ShallowText({children, center, m}) {
    return (
        <span className={`shallow-text ${center?"text-center":""}`} style={{margin:m}}>
            {children}
        </span>
    )
}

export default ShallowText
