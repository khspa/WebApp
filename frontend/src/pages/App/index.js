import React, { useEffect } from 'react'
import TopNavBar from 'components/NavBar/TopNavBar'
import SideBar from 'components/NavBar/SideBar'
import MainLayout from 'components/Layout/MainLayout'
import { FaUserAlt } from 'react-icons/fa'
import { Avatar, NoIcon } from 'components/Buttons/Avatar'
import Badge from 'components/Buttons/Badge'
import { ImExit } from 'react-icons/im'
import { AiTwotoneSetting } from 'react-icons/ai'
import ReactDOM from 'react-dom'
import Messages from 'components/Others/Messages'
import { IoMdNotifications } from 'react-icons/io'
import { FcAndroidOs } from 'react-icons/fc'
import Search from 'components/Buttons/Search'
import { BsBarChartFill, BsFillCalculatorFill } from 'react-icons/bs'
import { FaShoppingBag, FaHome, FaQuestionCircle } from 'react-icons/fa'
import { RiHandCoinFill } from 'react-icons/ri'
import BlankPage from 'components/Layout/BlankPage'
import Router from 'utilities/Router'

import Home from "pages/App/Home"
import DashBoard from "pages/App/DashBoard"
import Calculator from "pages/App/Calc"
import FAQ from "pages/App/FAQ"
import Repay from "pages/App/Repay"
import Shop from "pages/App/Shop"

import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { initUser } from "features/ActionCreators"


const noti = [
    {name:1, from:<FcAndroidOs/>, message:"AIFT team has sent you an message", date:"02/11/21", status:"read"},
    {name:2, from:<FcAndroidOs/>, message:"AIFT team has sent you an message", date:"02/11/21", status:"unread"},
    {name:3, from:<FcAndroidOs/>, message:"AIFT team has sent you an message", date:"02/11/21", status:"unread"}
]

function Main() {

    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const access = window.localStorage.getItem("access")

    useEffect(() => {

        const access_token = { headers: {Authorization: `Bearer ${access}`} }

        if(!access){
            history.push("/user/")
            const target =  document.getElementById("pop-up-message")
            ReactDOM.render(<Messages status="warning">Please log in first</Messages>, target)
        } else {
            axios.get("/api/info/", access_token)
            .then( response => {
                dispatch(initUser({username:response.data.username}))
            })
            .catch(error=>{
                if(error.response.status===401){
                    history.push("/user/")
                    const target =  document.getElementById("pop-up-message")
                    ReactDOM.render(<Messages status="warning">Please log in first</Messages>, target)
                }
            })
        }

    }, [access, history, dispatch])

    const handleLogout = () => {
        window.localStorage.removeItem("access")
        window.localStorage.removeItem("refresh")
        history.push("/user/")
    }

    return (
        <MainLayout>
            <MainLayout.Header
                navbar={
                    <TopNavBar 
                        title="AIFT"
                        items={[ 
                            <Search name="search"/>,
                            <Badge
                                name="badge"
                                icon={<IoMdNotifications/>}
                                data={noti}
                            />,
                            <Avatar
                                name="avatar"
                                icon={<NoIcon name="Wai Yin"/>}
                                items={[
                                    {name:user.username, icon:<FaUserAlt/>},
                                    {name:'settings', icon:<AiTwotoneSetting/>},
                                    {name:'logout', icon:<ImExit/>, do:handleLogout}
                                ]}
                            />
                        ]}
                    />
                }
            />
            <MainLayout.Content>
                <MainLayout.Side 
                    item={
                        <SideBar
                            icon="logo.svg"
                            items={[
                                {icon:<FaHome/>, title:"Home"},
                                {icon:<BsBarChartFill/>, title:"DashBoard"},
                                {icon:<FaShoppingBag/>, title:"Shop"},
                                {icon:<BsFillCalculatorFill/>, title:"Calculator"},
                                {icon:<RiHandCoinFill/>, title:"Repay"},
                                {icon:<FaQuestionCircle/>, title:"FAQ"},
                            ]}
                        />
                    }
                />
                <MainLayout.Body>
                    <BlankPage>
                        <Router>
                            <Home/>
                            <Repay/>
                            <DashBoard/>
                            <FAQ/>
                            <Shop/>
                            <Calculator/>
                        </Router>
                    </BlankPage>
                </MainLayout.Body>
            </MainLayout.Content>
        </MainLayout>
    )
}

export default Main
