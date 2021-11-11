import React, { useRef } from 'react'
import { AiFillWarning } from 'react-icons/ai'
import { MdOutlineGppGood } from 'react-icons/md'
import './Messages.scss'

function Messages({status, children}) {

    const ref = useRef("")

    return (
        <div ref={ref} className={`${status} alert-box pop`}>
            <div className="alert">
                <span className="sign">
                    {status==="warning"?<AiFillWarning/>:<MdOutlineGppGood/>}
                </span>
                <span className="msg"> {children} </span>
            </div>
        </div>

    )
}

export default Messages
