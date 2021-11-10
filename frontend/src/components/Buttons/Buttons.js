import React from 'react'
import './Buttons.scss'

export function ButtonsGroup({w, children, row}) {
    return (
        <div className={`btns-group ${row?"row":""}`} style={{maxWidth:w}}>
            {children}
        </div>
    )
}

export function CircleButton( {icon, size, bgColor, onClick} ) {
    return (
        <div className="cir-btn btn" style={{height:size, width:size, backgroundColor:bgColor}} onClick={onClick}>
            {icon}
        </div>
    )
}

export function RecButton( {icon, size, bgColor, children, onClick} ) {
    return (
        <div className="rec-btn btn" style={{height:size, width:size, backgroundColor:bgColor}} onClick={onClick}>
            {icon}
            {children}
        </div>
    )
}