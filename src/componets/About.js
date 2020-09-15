import React from 'react';
import IMG1 from '../img/pexels-ivan-bertolazzi-2681319.jpg';

const About = () => {
	return (
		<section className="container about grid-2">
			<div>
				<img src={IMG1} alt="" />
			</div>
			<div>
				<div>
					<h1 className="text-center large">Entrepreneur Pages</h1>
				</div>
				<div>
					<p className="lead">
						Entrepreneur Page is a business directory aimed at listing quality entrepreneur businesses.
						We're your one stop shop for all your needs!
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
