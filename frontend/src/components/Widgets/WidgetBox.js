import React from 'react'
import "./WidgetBox.scss"
import { AiFillQuestionCircle } from "react-icons/ai"

export function WidgetBox({children, w, h}) {
    return (
        <div className="w-box" style={{width: w, height: h}}>
            {children}
        </div>
    )
}

export function WidgetBox2({title, children, footer}) {
    return (
        <div className="w-box fullsize ver">
            <div className="sup"><AiFillQuestionCircle/></div>
            <div className="title">{title}</div>
            <div className="content">{children}</div>
            <div className="bottom">{footer}</div>
        </div>
    )
}

export function WidgetBox3({children}) {
    return (
        <div className="w-box fullsize ver">
            {children}
        </div>
    )
}