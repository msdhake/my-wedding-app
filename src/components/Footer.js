import React from 'react';


const Footer = ( { data = [], footer = {} }) => {

	let networks = data.map( (element) => {
        return <li key={element.name}>
                   <a target="_blank" rel="noreferrer noopener" href={element.url}>
                       <img className="social-icon" src={`images/${element.image}`} alt={element.name}/> 
                    </a>
                </li>
    })

	return ( 
       <footer>
		   <div className="container center-text">
			   <ul className="social-icons">
			        { networks }
			   </ul>
               <div className="copyright">
                   <div>&copy;  {footer.copyRight}  </div>
                   <div>{footer.designBy}  <a title="Styleshout" href="">  {footer.link}   </a></div>
               </div>
		    </div>
	    </footer>
        );
    }
    
    export default Footer;