import React from "react";
import { Carousel } from 'react-responsive-carousel'; 
//import "../../componentCSS/myStory.css"

const OurStory = ( { visible = false , renderOutStory , ourStories = [] } ) => {
    
    console.log(ourStories)

    const ourstory = ourStories.map((element) => {

        console.log(element)
        return (
            <li className="animate-box fadeInUp animated-fast">
                <div className="timeline-badge">
                    <img alt={element.storyImage.title} src={`images/${element.storyImage.image}`} />
                </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h3 className="timeline-title">In A Relationship</h3>
                            <span className="date">May 16, 2019</span>
                        </div>
                        <div className="timeline-body">
                            <p>It's our engagement time. We started new relationship.</p>
                        </div>
                </div>
            </li>
        )
    })

    return (visible) ?  (
        <div className="popup">
            <div  className="popup-inner">
                <button className="close-btn" onClick={(visible) => renderOutStory(!visible)}>close</button>
                  <Carousel autoPlay={true}>
                  {ourstory}
                </Carousel>
            </div> 
        </div>
    ) : "";
}

export default OurStory;