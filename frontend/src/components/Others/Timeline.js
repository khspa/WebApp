import React, { useReducer, useState, useEffect } from 'react'
import "./Timeline.scss";
import { DaysBetween } from "utilities/date"
import { useSelector } from 'react-redux';

const generateEvents = (events) => {
    let e = []
    var cur = 0
    var pos = 150
    for(let i = 0; i < events.length; i++) {
        if(i > 0) {
            pos += DaysBetween(events[i-1].date, events[i].date) * 40
        }
        let one = {
            id: i,
            date: `${JSON.stringify(events[i].date.getDate())}/${JSON.stringify(events[i].date.getMonth()+1)}`,
            position: JSON.stringify(pos) + "px",
            status: events[i].progress
        }
        if(one.status === "now") {
            cur = i
        }
        e.push(one)
    }
    return [e, cur]
}


const reducer = (state, action) => {
    switch (action.type) {
        case "forward":
            return state + 1
        case "backward":
            return state - 1
        case "set":
            return action.payload
        default:
            return state
    }
}


function Timeline({events}) {

    const [es, cur] = generateEvents(events)
    const [translate, dispatch] = useReducer(reducer, cur)
    const [now, setNow] = useState(cur)

    const reset = useSelector(state => state.timeline)
    useEffect(() => {
        dispatch({type: "set", payload: cur})
        setNow(cur)
    }, [reset, cur])

    const shift = es[translate].position
    
    const handleBackward = () => {
        translate !== 0 &&
            dispatch({type: "backward"})
    }

    const handleForward = () => {
        translate !== es.length - 1 &&
            dispatch({type: "forward"})
    }

    const desShift = position => JSON.stringify((100/es.length) * position) + "%"

    return (
        <>
            <section className="cd-horizontal-timeline">
                <span className={`tl-move ${translate===0?"forbid":""}`}  onClick={handleBackward}/>
                <div className="timeline-wrapper">
                    <div className="timeline" style={{"--trans":shift}}>
                        {es.map(e=>
                                <div key={e.id} className="event" style={{"--position":e.position}} >
                                    <span 
                                        id={`tl-${e.id}`} 
                                        className={`dot ${e.status}`} 
                                        onClick={()=>{
                                            setNow(e.id);
                                            dispatch({type:"set", payload:e.id})
                                        }}/>
                                    <span className="date">{e.date}</span>
                                </div>
                        )}
                        <div className="pg" style={{"--cur":es[cur].position}}></div>
                    </div>
                    
                </div>
                <span className={`tl-move ${translate===es.length-1?"forbid":""}`} onClick={handleForward}/>
            </section>
            <div className="descript">
                <div className="des-wrapper" style={{"--num":JSON.stringify(es.length)+"%", "--desShift":desShift(now)}}>
                    {events.map(e=>
                        <div key={e.date}>
                            {e.event}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Timeline
