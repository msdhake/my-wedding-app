import React from 'react'
import ReactTyped from 'react-typed'

const Wedding = ( { images = { sindoorImage : {} , timeInfo : {} , handShake : {} }, data = { bride : {} , groom : {} } }) => {

    const { sindoorImage, timeInfo, handShake } = images
    const { bride , groom } = data;

    return (
        <div className="main-slider">
            <div className="display-table center-text">
                <div className="display-table-cell">
                    <div className="slider-content">
                        <div>
                             <img className="sindur-dan" src={`images/${sindoorImage.image}`} alt="Sindur Dan"/>
                             <div className='animate__animated animate__flipInX animate__infinite'>
                                 <h5 className="date">{ timeInfo.wdate }</h5>
                             </div>
                        </div>
                        <div>
                            <h3 className="pre-title">
                            { timeInfo.title === undefined || timeInfo.title.length === 0? null : 
                                   <ReactTyped
                                      strings={timeInfo.title}
                                      typeSpeed={80}
                                      backSpeed={800}
                                      backDelay={5}
                                      loop
                                      smartBackspace
                                    /> }
                            </h3>
                        </div>
                        <br/><br/>
                        <div>
                             <h1 className="title"><span className='animate__animated animate__slideInDown animate__infinite' style={{display : "block"}}>{groom.name}</span>
                             <img className="sindur-dan" src={`images/${handShake.image}`} alt="Sindur Dan"/> 
                             <span className='animate__animated animate__slideInUp animate__infinite' style={{display : "block"}}>{bride.name}</span></h1>
                        </div>
                    </div>
			</div>
		</div>
	</div>
    );
}

export default Wedding;