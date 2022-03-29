import React from "react"

const BlessingDetails = ({className, data = { } }) => {

    return (
        <div className={className}>
            <img className="detail-blessing" src={`images/${data.image}`} href={data.url} />
            <h4 className="title">{ data.title }</h4>
            <p>{ data.subject }</p>
        </div>
    ) 
}
export default BlessingDetails