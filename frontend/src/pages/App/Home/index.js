import React from 'react'
import "./style.scss"
import Calender from 'components/Widgets/Calender'
import {WidgetBox, WidgetBox2} from 'components/Widgets/WidgetBox'
import InfoSheet from 'components/Widgets/InfoSheet'
import { BsFillCalendarDateFill } from "react-icons/bs"
import { refresh } from "features/ActionCreators"
import { useSelector, useDispatch } from "react-redux"
import ProgressBar from 'components/Widgets/ProgressBar'
import WelcomeText from "components/Text/WelcomeText"
import Timeline from "components/Others/Timeline"
import { initTimeline } from "features/ActionCreators"

const importantDates = [ new Date(2021, 11, 0), new Date(2021, 12, 0)]
const totalLend = 16100
const currentBalance = 4560
const nextPayment = 1200
const applicationProgress = [
    {date:new Date(2021, 10, 3), event:"Form submission",  progress:"finished"},
    {date:new Date(2021, 10, 6), event:"Background check", progress:"finished"},
    {date:new Date(2021, 10, 12), event:"Application reviewing", progress:"now"},
    {date:new Date(2021, 10, 19), event:"Final decision", progress:"ongoing"},
    {date:new Date(2021, 10, 22), event:"Cash delivery", progress:"ongoing"},
]

function Home() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const today = new Date()

    return (
        <div className="home">
            <div className="bx large">
                <WidgetBox>
                    <WelcomeText pic="dreamer.svg" subtitle={user.username}>
                        Welcome Back
                    </WelcomeText>
                </WidgetBox> 
                <WidgetBox>
                    <Calender importantDates={importantDates}/>
                    <InfoSheet title={<BsFillCalendarDateFill/>} w="100px" h="200px"> 
                        <div className="d-row td"> 
                            <span className="sm-t"> Today </span> 
                            <span className="sm-d">{today.getDate()}/{today.getMonth()+1}</span> 
                        </div>
                        <div className="d-row im"> 
                            <span className="sm-t"> Due Date </span> 
                            <span className="sm-d">{importantDates[0].getDate()}/{importantDates[0].getMonth()+1}</span> 
                        </div>
                        <div className="d-row btn btn-style" onClick={()=>dispatch(refresh())}> 
                            Today
                        </div>
                        
                    </InfoSheet>
                </WidgetBox> 
            </div>
            <div className="bx regular">
                <WidgetBox2 w="100%" h="100%" 
                    title={<h2> Payment Progress </h2>}
                    footer={<button>Pay Now</button>}
                >
                    <ProgressBar total={totalLend} current={currentBalance}/>
                    <h2 className="p">Next payment: ${nextPayment} by {importantDates[0].getDate()}/{importantDates[0].getMonth()+1}</h2>
                </WidgetBox2>
            </div>
            <div className="bx regular">
                <WidgetBox2 w="100%" h="100%"
                    title={<h2> Application </h2>}
                    footer={<button onClick={()=>dispatch(initTimeline())}>Current</button>}
                >
                    <Timeline events={applicationProgress}/>
                </WidgetBox2>
            </div>
            <div className="bx regular">
                Promotion
            </div>
            <div className="bx regular">
                My Records
            </div>
        </div>
    )
}

export default Home
