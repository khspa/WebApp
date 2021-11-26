import React, { useMemo } from 'react'
import "./style.scss"
import Calender from 'components/Widgets/Calender'
import { WidgetBox, WidgetBox2 } from 'components/Widgets/WidgetBox'
import InfoSheet from 'components/Widgets/InfoSheet'
import { BsFillCalendarDateFill } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import ProgressBar from 'components/Widgets/ProgressBar'
import WelcomeText from "components/Text/WelcomeText"
import Timeline from "components/Others/Timeline"
import { initTimeline, refresh, setPayment } from "features/ActionCreators"
import SimpleTable from "components/Tables/SimpleTable"
import JumpingText from "components/Text/JumpingText"
import Switcher from "components/Others/Switcher"
import { FaMoneyBillAlt } from "react-icons/fa"
import { MdAppRegistration } from "react-icons/md"

const importantDates = [ new Date(2021, 11, 0), new Date(2021, 12, 0)]

const cpayment = {
    LID: "L5613",
    totalLend: 16100,
    currentBalance: 5000,
    nextPayment: 1200
}

const applicationProgress = [
    {date:new Date(2021, 10, 3), event:"Form submission",  progress:"finished"},
    {date:new Date(2021, 10, 6), event:"Background check", progress:"finished"},
    {date:new Date(2021, 10, 12), event:"Application reviewing", progress:"now"},
    {date:new Date(2021, 10, 19), event:"Final decision", progress:"ongoing"},
    {date:new Date(2021, 10, 22), event:"Cash delivery", progress:"ongoing"},
]

const myloan = [
    {LID:"L5613", type:"Student", date:"09/01/2021", total:"$16100", status:"Current"},
    {LID:"L1244", type:"Home", date:"11/02/2020", total:"$25400", status:"Current"},
    {LID:"L0234", type:"Car", date:"01/23/2019", total:"$10000", status:"End"},
    {LID:"G0445", type:"Home", date:"05/11/2019", total:"$15000", status:"End"},
]

const loanContract = [
    {date: "11/02/2022", repayment: "$1200", status: "unpaid"},
    {date: "11/01/2022", repayment: "$1200", status: "unpaid"},
    {date: "11/12/2021", repayment: "$1200", status: "unpaid"},
    {date: "11/11/2021", repayment: "$1200", status: "paid"},
    {date: "11/010/2021", repayment: "$1200", status: "paid"},
    {date: "11/09/2021", repayment: "$1200", status: "paid"},
    {date: "11/08/2021", repayment: "$1200", status: "paid"},
    {date: "11/07/2021", repayment: "$1200", status: "paid"},
    {date: "11/06/2021", repayment: "$1200", status: "paid"},
    {date: "11/05/2021", repayment: "$1200", status: "paid"},
    {date: "11/04/2021", repayment: "$1200", status: "paid"},
    {date: "11/03/2021", repayment: "$1200", status: "paid"},
]

const userTransaction = [
    {transactionId: "b123d4", amount: "$1000", date:"05/11/2021"},
    {transactionId: "b123d4", amount: "$1000", date:"05/10/2021"},
    {transactionId: "b123d4", amount: "$1000", date:"05/09/2021"},
    {transactionId: "b123d4", amount: "$1000", date:"05/08/2021"},
    {transactionId: "b123d4", amount: "$1000", date:"05/07/2021"},
    {transactionId: "b123d4", amount: "$1000", date:"05/06/2021"},
    {transactionId: "b123d4", amount: "$1000", date:"05/05/2021"},
    {transactionId: "b123d4", amount: "$1000", date:"05/04/2021"},
    {transactionId: "b123d4", amount: "$1000", date:"05/03/2021"},
    {transactionId: "b123d4", amount: "$1000", date:"05/02/2021"},
    {transactionId: "b123d4", amount: "$1000", date:"05/01/2021"},
    {transactionId: "b123d4", amount: "$1000", date:"05/12/2020"},
]

const myapplication = [
    {AID:"A323", type:"Personal", date:"09/01/2021", status:"Current"},
    {AID:"A778", type:"Home Installment", date:"10/02/2021", status:"End"},
    {AID:"A124", type:"Student", date:"11/25/2020", status:"End"},
    {AID:"A015-C", type:"Credit", date:"10/04/2019", status:"End"},
]

const items = [
    {
        index: 0,
        tabname:"Loan", 
        tabicon:<FaMoneyBillAlt/>, 
        content:<SimpleTable data={myloan} warningStatus="Current"/>
    },
    {
        index: 1,
        tabname:"Application", 
        tabicon:<MdAppRegistration/>, 
        content:<SimpleTable data={myapplication} warningStatus="Current"/>
    },

]

function Home() {

    const user = useSelector(state => state.user)
    const payment = useSelector(state => state.payment)

    const dispatch = useDispatch()
    const today = new Date()

    useMemo(() => {
        dispatch(setPayment(cpayment))
    }, [dispatch])


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
                    title={<h2> Payment Progress - {payment.LID} </h2>}
                    footer={<button>Pay Now</button>}
                >
                    <ProgressBar total={payment.totalLend} current={payment.currentBalance}/>
                    <h2 className="p">Next payment: ${payment.nextPayment} by {importantDates[0].getDate()}/{importantDates[0].getMonth()+1}</h2>
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
                <WidgetBox w="100%" h="100%">
                    <JumpingText pic="bank.svg" jumptext={[
                        "1.5% Interest rate",
                        "Collateral free",
                        "3-day process",
                        "No credit check",
                    ]}>
                        Check Out Student Loan Scheme
                    </JumpingText>
                </WidgetBox> 
            </div>
            <div className="bx regular">
                <Switcher items={items} />
            </div>
        </div>
    )
}

export default Home
