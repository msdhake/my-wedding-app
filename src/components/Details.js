import React from 'react';
import BlessingDetails from './subcomponents/BlessingDetails';

const Details = ( { data = []}) => {

    let blessingDetails = data.map( (element, index) => {
        if(index % 2 === 0) {
            return <BlessingDetails className="w-detail right" data = { element }/>
        } else {
            return <BlessingDetails className="w-detail left" data = { element }/>
        }
    })


    return (
        <section className="section w-details-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">

                        <div className="heading">
                            <h2 className="title">Wedding Details</h2>
                            <span className="heading-bottom"><i className='fas fa-star-of-life' style={{color: "red"}}></i></span>
                        </div>

                        <div className="wedding-details margin-bottom">
                           { blessingDetails }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;