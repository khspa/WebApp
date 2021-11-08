import React from 'react'
import './BasicLayout.scss'

function BasicLayout( {background, children} ) {
    return (
        <div className="background">
            {background}
            {children}
        </div>

    )
}

function Header( {prefix, suffix, children} ) {

    if(!children){
        return (
            <div className="header">
                {prefix}
                {suffix}
            </div>
        )
    }
    else {
        return (
            <div className="header">
                {children}
            </div>
        )
    }
    
}
function Body({children, centerItems}) {
    return (
        <div className={`main-body ${centerItems && "center"}`}>
            {children}
        </div>
    )
}
function Footer({children}) {
    return (
        <div className="footer">
            {children}
        </div>
    )
}

BasicLayout.Header = Header
BasicLayout.Body = Body
BasicLayout.Footer = Footer

export default BasicLayout
