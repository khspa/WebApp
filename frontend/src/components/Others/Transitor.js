import React from 'react'
import './Transitor.scss'

function Transitor({children, show}) {
    return (
        <div className={`transitor ${show?"active":"inactive"}`}>
            {React.Children.map(children, child=>
                <div 
                    id={child.props.id} 
                    className='child'>{child}
                </div>
            )}
        </div>
    )
}

function Wrapper({children, id}) {
    return (
        <div id={id}> {children} </div>
    )
}

Transitor.Wrapper = Wrapper
export default Transitor