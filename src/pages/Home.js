import React, { Fragment } from 'react';
import Hero from '../componets/Hero';
import Catogery from '../componets/Category';
import Business from '../bus/Business';
import About from '../componets/About';
import '../componets/home.scss';

const Home = () => {
	return (
		<Fragment>
			<Hero />
			<Catogery />
			<About />
			<Business />
		</Fragment>
	);
};

export default Home;
