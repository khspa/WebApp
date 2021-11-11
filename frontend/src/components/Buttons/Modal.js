import React, { useState } from 'react'
import './Buttons.scss'
import { ButtonsGroup, RecButton } from 'components/Buttons/Buttons'
 
function Modal({children, messages, button}) {


    const [on, setOn] = useState(false)

    const handleClose = () => {
        setOn(false)
        button.middleWare && button.middleWare()
    }

    const handleClick = () => {
        document.removeEventListener('click', closeModal)
        setOn(true)
    }

    const closeModal = () => {
        setOn(false)
        document.removeEventListener('click', closeModal)
    }

    const handleMouseOut = () => {
        document.addEventListener('click', closeModal)
    }

    const handleMouseIn = () => {
        document.removeEventListener('click', closeModal)
    }

    return (
        <div className="modal-container">
            <span id="modal-btn" className="btn" onClick={handleClick}>
                {children}
            </span>

            <div id="simple-modal" className={`modal ${on?"active":"inactive"}`}>
                <div className="modal-content" onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                    <span className="closeBtn btn" onClick={()=>setOn(false)}>
                        &times;
                    </span>
                    <div className="modal-text">
                        {messages}
                        {
                            button && 
                            <ButtonsGroup w="100%">
                                <RecButton onClick={handleClose}>
                                    {button.closeMessage}
                                </RecButton>
                            </ButtonsGroup>
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal
