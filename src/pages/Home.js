import React, { Fragment } from 'react';
import Hero from '../componets/Hero';
import Catogery from '../componets/Category';
import '../componets/home.scss';

const Home = () => {
	return (
		<Fragment>
			<Hero />
			<Catogery/>
		</Fragment>
	);
};

export default Home;
