import React from 'react'
import './BlankPage.scss';

function BlankPage({children}) {
    return (
        <div className="b-page">
            {children}
        </div>
    )
}

export default BlankPage
