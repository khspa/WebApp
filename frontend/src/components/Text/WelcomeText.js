import React from 'react'
import "./Text.scss"

function WelcomeText( {children, subtitle, pic} ) {
    return (
        <div className="welcome-text">     
            <title className="greetings">
                <h1> {children} </h1>
                <h3> {subtitle} </h3>
            </title>
            <img className="pic" src={pic} alt="pic"/>
        </div>
    )
}

export default WelcomeText
