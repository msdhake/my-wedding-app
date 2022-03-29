import React from "react";

const CeremonyDetails = ( {data = [], className } ) => {
    
    const imageDetail = data.imagedetail
    const dinner = data.dinner
    return (
     <>
        <div className={className}>
            <img className="sindur-dan" src={`images/${imageDetail.image}`} href={imageDetail.url} />
			<h4 className="title">{data.title}</h4>
            <p> { data.weddingDate } </p>
			<p> {data.lawnName} </p>
            <p><i className="fa fa-map-marker" style={{fontSize: "48px" , color: "red"}}></i></p>
            <p>{data.address}</p>
            <p>
			    <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7893.659597052991!2d75.5569503418494!3d20.980166760526398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90e43985ca583%3A0x52c7ca7e945cb764!2sShri%20Krushna%20Lawn%2C%20Jalgaon%2C%20MS!5e0!3m2!1sen!2sin!4v1648179309519!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>        
                </div>
			</p>
            <br/><br/>
        </div>    
        <div className={className}>
			<img className="sindur-dan" src={`images/${dinner.image}`} alt={dinner.name}/> 
			<h4 className="title">{ data.mealtype }</h4>
			<p>{ data.meal }</p>
		</div> 
        
     </>
    )
}

export default CeremonyDetails 