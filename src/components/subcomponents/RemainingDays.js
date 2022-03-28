import React from "react";

const RemainingDays = ( { dateTime =  "" , labels = ""}) => {

    const dayInfo = dateTime
    const label = labels

    return (
        <div className="time-sec"><span className="title">{dayInfo}</span> {label} </div>
    ) 
}

export default RemainingDays 