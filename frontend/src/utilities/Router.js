import React from 'react'
import { useSelector } from 'react-redux'


function Router({children}) {

    const page = useSelector(state => state.page)

    const cur = React.Children.map(children, child=>{
        if(child.type.name === page ) {return child}
    })

    return (
        <>
            {cur}
        </>
    )
}

export default Router
