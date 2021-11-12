import React from 'react'
import "./TopNavBar.scss"

function TopNavBar({title, logo, items}) {

    return (
        <div className="top-nav-bar">
            <div className="logo-container">
                { logo && 
                    <img alt="logo" src={process.env.PUBLIC_URL + logo}/>
                }
                {
                    title &&
                    <span>{title}</span>
                }

            </div>
            
            <ul className="nav-items">
                {items.map(item => {
                    return <li className="btn" key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default TopNavBar
