import React from 'react';


const Footer = ( { data = [] }) => {

	let networks = data.map( (element) => {
        return <li key={element.name}>
                   <a target="_blank" rel="noreferrer noopener" href={element.url}>
                          <i className={element.className}>
                          </i>
                    </a>
                </li>
    })

	return ( 
       <footer>
		   <div className="container center-text">
			   <ul className="social-icons">
			        { networks }
			   </ul>
		    </div>
	    </footer>
        );
    }
    
    export default Footer;