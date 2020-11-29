import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
	return (
		<footer className='container footer-links text-center'>
			<div className='grid-2'>
				<div>
					<h2>Entrepreneur Pages</h2>
				</div>
				<div>
					<h5>Useful Links</h5>
					<ul>
						<li>
							<Link to='/'>Home</Link>

							<Link to='/contact'>Contact </Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
