import React from 'react'
import "./InfoSheet.scss"

function InfoSheet({h, w, title, children}) {
    return (
        <div className="info-s" style={{height: h, width: w}}>
            <h3 className="info-title">{title}</h3>
            {children}
        </div>
    )
}

export default InfoSheet
