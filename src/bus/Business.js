import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import IMG1 from '../img/bake.jpg';
import IMG2 from '../img/DGOLD_BLACK_720x.png';
import IMG3 from '../img/gih.jpg';
import IMG4 from '../img/lg.jpg';
import IMG5 from '../img/tw.jpg';
import IMG6 from '../img/wf.jpg';

const Business = () => {
	return (
		<section className="business p-3 ">
			<h1 className="text-center large py-4">Entrepreneurs</h1>
			<div className="grid-4 container">
				<div>
					<img src={IMG1} alt="" />
				</div>
				<div>
					<img src={IMG2} alt="" />
				</div>
				<div>
					<img src={IMG3} alt="" />
				</div>
				<div>
					<img src={IMG4} alt="" />
				</div>
				<div>
					<img src={IMG5} alt="" />
				</div>
				<div>
					<img src={IMG6} alt="" />
				</div>
			</div>
			<div className="text-center py-4">
				<Button variant="primary" size="lg" active>
					<Link to="/catergory">More Entrepreneurs</Link>
				</Button>{' '}
			</div>
		</section>
	);
};
export default Business;
