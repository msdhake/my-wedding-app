import React from 'react';
import CeremonyDetails from './subcomponents/CeremonyDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Location = ( { data = [] } ) => {

    return ( <section className="section w-details-area center-text">
		<div className="container">
			<div className="row">
				<div className="col-sm-1"></div>
				<div className="col-sm-10">
					
					<div className="heading">
						<h2 className="title">Wedding & Haldi Details</h2>
						<span className="heading-bottom"><i className='fas fa-star-of-life' style={{color: "red"}}></i></span>
					</div>
					
					<div className="wedding-details margin-bottom">
						
						<div className="w-detail right">
							{data.length > 0 ? ( <CeremonyDetails data = { data[0] } />) : null }
							
						</div> 
						
						<div className="w-detail right">
							<i className="fa fa-cutlery" style={{fontSize: "48px" , color: "red"}}></i>
							<h4 className="title">DINNER</h4>
							<p>Time: 12:40 PM Onwards</p>
						</div> 
						
						<div className="w-detail left">
							{data.length > 1 ? ( <CeremonyDetails data = { data[1] } />) : null }
						</div> 
						
						<div className="w-detail left">
							<i className="fa fa-cutlery" style={{fontSize: "48px" , color: "red"}}></i>
							<h4 className="title">DINNER</h4>
							<p>Time: 7 PM Onwards</p>
						</div> 
						
					</div>
					
				</div>
			</div>
		</div>
    </section>    
    );
}

export default Location;