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
                        <img className="sindur-dan" src={`images/${sindoorImage.image}`} alt="Sindur Dan"/>
                        <h5 className="date">{ timeInfo.wdate }</h5>
                        <h3 className="pre-title">{ timeInfo.title }
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
                        </h3>
                        <h1 className="title">{groom.name}   
                        <img className="sindur-dan" src={`images/${handShake.image}`} alt="Sindur Dan"/> 
                        {bride.name}</h1>

                    </div>
			</div>
		</div>
	</div>
    );
}

export default Wedding;