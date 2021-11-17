import React, { useState, useRef } from 'react'
import './Search.scss'
import { BiSearch } from 'react-icons/bi'

function Search() {

    const [expand, setExpand] = useState(false)
    const ref = useRef()

    return (
        <div
            className={`search-bx ${expand?"expand":""}`}
        >
            <BiSearch onClick={()=>{setExpand(!expand);ref.current.focus();}}/> 
            <input ref={ref}/>
        </div>
    )
}

export default Search
