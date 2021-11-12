import React from 'react'
import "./MainLayout.scss"

function MainLayout( {children} ) {

    return (
        <div className="main">
            {children}
        </div>
    )
}

function Header({navbar}) {

    return (
        <nav className="main-header">
            {navbar}
        </nav>
    )

}

function Side({item}) {

    return (
        <div className="main-side">
            {item}
        </div>

    )
}

function Body({children}) {
    return (
        <div className="main-body">
            {children}
        </div>
    )
}

function Content({children}) {

    return (
        <main className="main-content">
            {children}
        </main>
    )
}

MainLayout.Header = Header
MainLayout.Content = Content
MainLayout.Side = Side
MainLayout.Body = Body

export default MainLayout
