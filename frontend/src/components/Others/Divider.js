import React from 'react'
import './Divider.scss'

function Divider({children}) {
    return (
        <div className="container">
            <div className="lines"><span>{children}</span></div>
        </div>
    )
}

export default Divider
