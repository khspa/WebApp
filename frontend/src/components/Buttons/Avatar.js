import React, { useState } from 'react'
import './Avatar.scss'

export function Avatar( {icon, text, items} ) {

    const [menu, setMenu] = useState(false)
    
    return (
        <div className="avatar" onMouseLeave={()=>setMenu(false)}>
            <div className="icon" onMouseEnter={()=>setMenu(true)}>{icon}</div>
            {text}
            <ul className={`drop-down ${menu?"active":"inactive"}`}>
                { items.map(item => {
                    return (<li 
                                className="d-item"
                                key={"avatar-"+item.name}
                                onClick={()=>item.do()}
                            >
                        <span className="i"> {item.icon} </span> 
                        <span className="item-t"> {item.name} </span>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export function NoIcon( {name} ) {

    const displayName = () => {
        const str = name.split(' ')
        return str[0][0] + str[1][0]
    }

    return (
        <div className="no-icon">
            {displayName()}
        </div>
    )
}