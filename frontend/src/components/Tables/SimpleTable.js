import React from 'react'
import "./SimpleTable.scss"

function SimpleTable({data, warningStatus}) {

    const headers = Object.keys(data[0])

    const parseRows = (row) =>{
        var eachColumn = []
        for(var key in row) {
            key === "status" ?
                eachColumn.push(
                    <td key={key}>
                        <p 
                            className={`status status-${row[key] === warningStatus ? "warning" : "fine" }`}
                        >
                            {row[key]}
                        </p>
                    </td>
                ) :
                eachColumn.push(
                    <td key={key}>
                        {row[key]}
                    </td>
                )
        }
        return eachColumn
    }

    return (
        <div className="table-container">
            <table className="simple-table">
                <thead>
                    <tr>
                        {headers.map(item=>
                            <th key={item}>{item}</th>
                        )}
                    </tr>

                </thead>
                <tbody>
                    {data.map(record=>{return(
                        <tr key={record[Object.keys(record)[0]]}>{parseRows(record)}</tr>
                    )})}
                </tbody>
            </table>
        </div>

    )
}

export default SimpleTable
