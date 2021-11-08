import React, { useState } from 'react'
import "./Toggle.scss"

function Toggle({on, off, icon, active, setActive}) {

    const handleClick = () => setActive(!active)

    return (
        <div className="toggle-container">
            <div className={`shape ${active?"active":"inactive"}`} >
                <div className="gp btn" onClick={handleClick}>
                        <span> {icon} </span>
                        <span> {on} </span>  
                </div>     
            </div>
            <div className={`shape ${active?"inactive":"active"}`} >
                <div className="gp btn" onClick={handleClick}>
                        <span> {icon} </span>
                        <span> {off} </span>  
                </div>     
            </div>
        </div>

    )
}

export default Toggle
