import React from 'react'
import { IoLanguageSharp } from 'react-icons/io5'
import './Buttons.scss'

function Locale() {

    const handleClick = () => {
        
    }

    return (
        <div className="header-icon locale btn" onClick={handleClick}>
            <IoLanguageSharp/>
        </div>
    )
}

export default Locale
