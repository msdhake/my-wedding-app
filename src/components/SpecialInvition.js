import React from "react";

const SpecialInvitation = ( {data = { name : [], images : []} } ) => {

    const { name , images, quotes} = data;  
    
    let kiddoInvite = images.map( (element) => {

        return <div key={element.name} className="circular_image">
                    <img src = {`images/${element.image}`}  alt={element.title} className="circular_image" />  
                </div>
    })

    return (
        <section className="section w-details-area center-text">
		<div className="container">
			<div className="row">
				<div className="col-sm-1"></div>
				<div className="col-sm-10">
					
					<div className="heading">
						<h2 className="title">Special Invitation from our Kiddo teams</h2>
						<span className="heading-bottom"><i className='fas fa-star-of-life' style={{color: "red"}}></i></span>
                    </div>
                        { kiddoInvite }
                    <div className="quotes-para">
                        <p> { quotes } </p>
					</div>
                </div>
            </div>
        </div>
        </section>
        
    );
}

export default SpecialInvitation;