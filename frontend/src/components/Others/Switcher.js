import React, { useState } from 'react'
import "./Switcher.scss"

function Switcher({items}) {

    const [tab, setTab] = useState(0)

    return (
        <div className="switcher">
            <nav className="tabs">
                <ul className="tabs__list">
                    <>
                        { items.map(item=>{return (
                            <li 
                                key={item.index}
                                className={`tabs__listitem ${items[tab].tabname===item.tabname?"active":""}`}
                                onClick={()=>setTab(item.index)}
                            >
                                <div className="corner left">
                                    <div className="corner-shape"/>
                                </div>
                                <div className="tab-container">
                                    <i>{item.tabicon}</i>
                                    <span>{item.tabname}</span>
                                </div>
                                <div className="corner right">
                                    <div className="corner-shape"/>
                                </div>
                            </li>
                        )})}
                    </>
                </ul>
            </nav>
            <div className="switcher-content">
                {items.at(tab).content}
            </div>
        </div>

    )
}

export default Switcher
