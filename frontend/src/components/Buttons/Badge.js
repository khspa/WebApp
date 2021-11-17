import React, { useState } from 'react'
import './Badge.scss'

function Badge( {icon, data} ) {
    
    const [menu, setMenu] = useState(false)

    return (
        <div className="badge" onMouseLeave={()=>setMenu(false)}>
            {data && data.length > 0 && <div className="num"> {data.length} </div>}
            <div className="icon"onMouseEnter={()=>setMenu(true)}>{icon}</div>
            <ul className={`drop-down ${menu?"active":"inactive"}`}>
                { data && data.map(item => {
                    return (<li 
                                className="d-item"
                                key={"badge-"+item.name}
                            >
                        <span className="from"> {item.from} </span>
                        <span className="message"> {item.message} </span>
                        <span className={`status ${item.status}`}>{item.status}</span>
                        <span className="date"> {item.date} </span>
                    </li>)
                })}
            </ul>
        </div>
    )
}
export default Badge
