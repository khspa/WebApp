import React, { useEffect } from 'react'
import "./Text.scss"


function JumpingText({pic, jumptext, children}) {

    useEffect(()=>{
        const intv = setInterval(()=>{
            const show = document.querySelector("span[data-show]")
        
            const next = show.nextElementSibling || document.querySelector(".mask > span")
            const up = document.querySelector("span[data-up]")
        
            if(up) {
                up.removeAttribute("data-up")
            }
        
            show.removeAttribute("data-show")
            show.setAttribute("data-up", "")
        
            next.setAttribute("data-show", "")
        
        }, 2000)
        return ( ()=> {
            clearInterval(intv)
        })
    },[])

    return (
        <div className="jumping-text">
            <img src={pic} alt="pic"/>
            <div className="jumping-container">
                <span className="nt">{children}</span> 
                <div className="sub-j-c">
                    <div className="mask">
                        {<>
                            <span className="animated-text" data-up>{jumptext.at(1)}</span>
                            <span className="animated-text" data-show>{jumptext.at(0)}</span>      
                            {jumptext.slice(2, jumptext.length).map(item=>
                                <span key={item} className="animated-text">
                                    {item}
                                </span>
                            )}
                        </>}
                    </div>
                    <button>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default JumpingText
