function GetDays(month, year) {

    const IsToday = (day) => {
        let currDate = new Date()
        if(month===currDate.getMonth() && 
           year===currDate.getFullYear() && 
           day===currDate.getDate()
           ){
            return true
        } else {
            return false
        }
    }

    let monthStart = new Date(year, month, 1)
    let monthEnd = new Date(year, month+1, 0)
    
    let numOfDays = new Date(year, month, 0).getDate()
    let days = []
    for(let i = 0; i < monthStart.getDay(); i++) {
        let ldays = numOfDays - i
        days.unshift(<span key={`p-${ldays}`} className="grey">{ldays}</span>)
    }
    for(let i = 1; i <= monthEnd.getDate(); i++) {
        days.push(<span key={`c-${i}`} id={`c-${i}`} className={IsToday(i)?"d today":"d"}>{i}</span>)
    }
    for(let i = 1; i < 7 - monthEnd.getDay(); i++) {
        days.push(<span key={`f-${i}`} className="grey">{i}</span>)
    }

    return days
}

export default GetDays
