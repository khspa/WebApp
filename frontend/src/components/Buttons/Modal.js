import React, { useState } from 'react'
import './Buttons.scss'

function Modal({children, messages}) {

    const [on, setOn] = useState(false)

    return (
        <div className="modal-container">
            <span id="modal-btn" className="btn" onClick={()=>setOn(true)}>
                {children}
            </span>

            <div id="simple-modal" className={`modal ${on?"active":"inactive"}`}>
                <div className="modal-content">
                    <span className="closeBtn btn" onClick={()=>setOn(false)}>
                        &times;
                    </span>
                    <div className="modal-text">{messages}</div>
                </div>
            </div>
        </div>

    )
}

export default Modal
