import React from 'react'
import "./ProgressBar.scss"

function ProgressBar({total, current}) {

    const progress = JSON.stringify(Math.round((current/total)*100)) + "%"

    return (
        <div className="progress">
            <div className="progress-bar">
                <span style={{"--progress":progress}}/>
            </div>
            <h2 className="percentage">
                ${current}/${total}
            </h2>
        </div>

    )
}

export default ProgressBar
