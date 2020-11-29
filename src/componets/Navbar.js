import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navabar'>
			<h2>Entrepreneur Pages</h2>

			<ul>
				<li>
					<Link to='/'>Home</Link>
					<Link to='/contact'>Contact </Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
