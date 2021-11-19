import React from 'react'
import "./Text.scss"

function NeonText( {children} ) {

    const generateText = (text) => {
        let string = []
        for(let i = 0; i < text.length; i++) { 
            string.push( {index:{['--i']: i+1}, c:text.charAt(i)} )
        }
        return string
    }

    return (
        <div className="neon-text">
            {generateText(children).map(character=>{
                return <span style={character.index}>{character.c}</span>
            })}
        </div>
    )
}

export default NeonText
