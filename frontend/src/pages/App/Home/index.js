import React from 'react'
import "./style.scss"
import Calender from 'components/Widgets/Calender'
import WidgetBox from 'components/Widgets/WidgetBox'
import InfoSheet from 'components/Widgets/InfoSheet'
import { BsFillCalendarDateFill } from "react-icons/bs"
import { refresh } from "features/ActionCreators"
import { useSelector, useDispatch } from "react-redux"
import ProgressBar from 'components/Widgets/ProgressBar'
import WelcomeText from "components/Text/WelcomeText"

const importantDates = [ new Date(2021, 11, 0), new Date(2021, 12, 0)]

function Home() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const today = new Date()

    console.log(user)

    return (
        <div className="home">
            <div className="bx large">
                <WidgetBox >
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
                <ProgressBar/>
            </div>
            <div className="bx regular">
                Application
            </div>
            <div className="bx regular">
                Promontion
            </div>
            <div className="bx regular">
                My Records
            </div>
        </div>
    )
}

export default Home
