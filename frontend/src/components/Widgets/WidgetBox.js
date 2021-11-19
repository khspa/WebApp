import React from 'react'
import "./WidgetBox.scss"

function WidgetBox({children, w, h}) {
    return (
        <div className="w-box" style={{width: w, height: h}}>
            {children}
        </div>
    )
}

export default WidgetBox
