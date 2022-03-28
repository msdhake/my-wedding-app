import React from 'react';
const Header = ( { data  = { vImages : {} } }  ) => {
 
	const { vImages } = data;
	return (
			<header>

				<div className="container">
					<a className="logo" href={vImages.url}>
					<img alt={vImages.title} src={`images/${vImages.image}`} />
					</a>
				</div>
			</header>
	);
}

export default Header;