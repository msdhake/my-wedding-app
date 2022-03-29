import React from 'react';
const Header = ( { data  = { vImages : {}, kalika : {},  samarth : {} } }  ) => {
 
	const { vImages, kalika, samarth } = data;
	return (
			<header>
				<div className="container">
					<div className="left">
					    <div>
						   <a className="logo" href={vImages.url}>
					          <img alt={vImages.title} src={`images/${vImages.image}`} />
					       </a>
						</div>
						<div>
						    {vImages.title}
						</div>
					</div>
					
					<div className='middle'>
					    <div>
						     <a className="logo" href={kalika.url}>
					            <img alt={kalika.title} src={`images/${kalika.image}`} />
					         </a>
						</div>
						<div>
						     {kalika.title}
						</div>
						
					</div>

					<div className='right'>
					    <div>
						   <a className="logo" href={samarth.url}>
					          <img alt={samarth.title} src={`images/${samarth.image}`} />
					       </a>
						</div>
						<div>
							{samarth.title}
						</div>
					</div>
				</div>
				
			</header>
	);
}

export default Header;