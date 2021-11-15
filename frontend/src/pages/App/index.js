import React, { useEffect } from 'react'
import { createStore  } from 'redux'
import allReducer from './CombinedReducer'
import { Provider } from 'react-redux'
import TopNavBar from 'components/NavBar/TopNavBar'
import SideBar from 'components/NavBar/SideBar'
import MainLayout from 'components/Layout/MainLayout'

// import increment from "./ActionCreators"
// import { useSelector, useDispatch } from 'react-redux'
// const [state] = useSelector(state => state.[state])
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function Main() {

    const history = useHistory()

    const access = window.localStorage.getItem("access")
    
    useEffect(() => {

        const access_token = { headers: {Authorization: `Bearer ${access}`} }

        if(!access){
            history.push("/user/")
        } else {
            axios.get("/api/info/", access_token)
            .then( response => {
                console.log(response)
            })
            .catch(error=>{
                if(error.response.status===401){
                    history.push("/user/")
                }
            })
        }
    }, [access, history])

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
