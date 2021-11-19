import React, { useEffect, useReducer, useState } from 'react'
import "./Calender.scss"
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go"
import GetDays from "utilities/date"
import { AiOutlineRollback } from "react-icons/ai"
import { useSelector } from 'react-redux'


var weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
var MonthCode = {
                0:"January",
                1:"Februray",
                2:"March",
                3:"April",
                4:"May",
                5:"June",
                6:"July",
                7:"August",
                8:"September",
                9:"October",
                10:"November",
                11:"December",
            }

let currDate = new Date()

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "overwrite":
            return action.payload
        default:
            throw new Error();
    }
}

const MonthGenerator = (Switch, Open) => {
    let months = []
    for (const code in MonthCode) {
        months.push(
            <span
                key={code}
                className="mon-style" 
                onClick={()=>{Switch(parseInt(code)); Open(false);}}
            >
                {MonthCode[code].substring(0,3)}
            </span>
        )
    }
    return months
}


function Calender( {importantDates} ) {

    const [monthSelector, setMonthSelector] = useState(false)
    const [month, setMonth] = useState(currDate.getMonth())
    const [year, dispatch] = useReducer(reducer, currDate.getFullYear())
    
    const calender = useSelector(state => state.calender)

    useEffect(() => {
        setMonth(currDate.getMonth())
        dispatch({type:"overwrite", payload:currDate.getFullYear()})
    }, [calender])

    const close = () => {
        setMonthSelector(false)
        document.removeEventListener('click', close)
    }

    const handleMouseOut = () => {
        document.addEventListener('click', close)
    }

    const handleMouseIn = () => {
        document.removeEventListener('click', close)
    }

    useEffect(() => {
        
        //render hightlight if any
        importantDates && 
            importantDates.forEach(date=>{
                let iMonth = date.getMonth()
                let iDay = date.getDate()
                let iYear = date.getFullYear()
                
                if(iYear===year && iMonth===month){
                    let target = document.getElementById(`c-${iDay}`)
                    target.classList.add("highlight")
                }
            })
        
        //clear highlight
        return () => {
            let targets = document.getElementsByClassName("highlight")
            for(let i = 0; i < targets.length; i++) {
                targets[i].classList.remove("highlight")
            }
        }

    }, [month, year, importantDates])

    return (
        <div className="cen-box" onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
            <div className="calender">
                <div className="time">
                    <span className="month" onClick={()=>setMonthSelector(true)}>{MonthCode[month]}</span>
                    <div className="year-box">
                        <GoTriangleLeft onClick={()=>dispatch({type: 'decrement'})}/>
                        <span className="year" > {year} </span>
                        <GoTriangleRight onClick={()=>dispatch({type: 'increment'})}/> 
                    </div>
                </div>
                <div className="days">
                    { weekdays.map(day=><span key={day} className="he">{day}</span>) }
                    { GetDays(month, year, importantDates) }
                </div>     
            </div>
            <div className={`month-selector ${monthSelector?"op":"cl"}`}>
                <h3 className="mt" onClick={()=>setMonthSelector(false)}> <AiOutlineRollback/> </h3>
                { MonthGenerator(setMonth, setMonthSelector) }
            </div>
        </div>

    )
}

export default Calender
