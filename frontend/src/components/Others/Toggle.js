import React from 'react'
import "./Toggle.scss"

function Toggle({on, off, icon, active, setActive}) {

    const handleClick = () => setActive(!active)

    return (
        <div className="toggle-container btn">
            <div className={`shape ${active?"active":"inactive"}`} onClick={handleClick}>
                <div className="gp">
                        <span> {icon} </span>
                        <span> {on} </span>  
                </div>     
            </div>
            <div className={`shape ${active?"inactive":"active"}`}  onClick={handleClick}>
                <div className="gp btn">
                        <span> {icon} </span>
                        <span> {off} </span>  
                </div>     
            </div>
        </div>

    )
}

export default Toggle
