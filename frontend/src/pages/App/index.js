import React from 'react'
import { createStore  } from 'redux'
import allReducer from './CombinedReducer'
import { Provider } from 'react-redux'
import TopNavBar from 'components/NavBar/TopNavBar'
import SideBar from 'components/NavBar/SideBar'
import MainLayout from 'components/Layout/MainLayout'

// import increment from "./ActionCreators"
// import { useSelector, useDispatch } from 'react-redux'
// const [state] = useSelector(state => state.[state])

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function Main() {

    return (
        <Provider store={store}>
            <MainLayout>
                <MainLayout.Header
                    navbar={
                        <TopNavBar 
                            title="AIFT"
                            items={["Sign Out"]}
                        />
                    }
                />
                <MainLayout.Content>
                    <MainLayout.Side item={<SideBar/>}/>
                    <MainLayout.Body>
                        SADFASDFFASDSADF
                    </MainLayout.Body>
                </MainLayout.Content>
            </MainLayout>
        </Provider>
    )
}

export default Main
