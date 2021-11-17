import React, { useState } from 'react'
import "./SideBar.scss"
import { GiHamburgerMenu } from 'react-icons/gi'
import { go } from "features/ActionCreators"
import { useSelector, useDispatch } from 'react-redux'


function SideBar( {items, icon} ) {

    const [expand, setExpand] = useState(false)
    const dispatch = useDispatch()
    const page = useSelector(state => state.page)

    const handleClick = e => {
        window.screen.width <= 650 && setExpand(false)
        const value = e.currentTarget.getAttribute('name')
        dispatch(go(value))
    }

    return (
        <div className={`sidebar ${expand?"o":"c"}`}>
            {icon &&
                <span className="sidebar-logo">
                    <img src={icon} alt="icon" />
                </span>
            }

            <div className="ex" onClick={()=>setExpand(!expand)}>
                <GiHamburgerMenu/>
            </div>
            <ul className="sidebar-items">
                { items && 
                    items.map(item=>{
                        return (
                        <li name={item.title} key={item.title} className={`sidebar-item ${item.title===page?"cur-active":""}`} onClick={handleClick}>
                            <div>
                                <i>{item.icon}</i>
                                <span className={``}>{item.title}</span>
                                <div className="tooltip">
                                    <label className="chatbox">{item.title}</label>
                                </div>
                            </div>
                        </li>
                    )})
                }
            </ul>
        </div>
    )
}

export default SideBar
