import React from 'react'
import '../componentCSS/Wedding.css'
import ReactTyped from 'react-typed'

const Wedding = ( { images = { sindoorImage : {} , timeInfo : {} , handShake : {} }, data = { bride : {} , groom : {} } }) => {

    const { sindoorImage, timeInfo, handShake} = images
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
                        <h3 className="pre-title">
                        { timeInfo.title === undefined || timeInfo.title.length === 0? null : 
                               <ReactTyped
                                  strings={timeInfo.title}
                                  typeSpeed={80}
                                  backSpeed={80}
                                  backDelay={1}
                                  loop
                                  smartBackspace
                                /> }
                        </h3>
                        <div className='animate__animated animate__rubberBand animate__infinite'>
                             <h1 className="title">{groom.name}   
                             <img className="sindur-dan" src={`images/${handShake.image}`} alt="Sindur Dan"/> 
                             {bride.name}</h1>
                        </div>
                    </div>
			</div>
		</div>
	</div>
    );
}

export default Wedding;