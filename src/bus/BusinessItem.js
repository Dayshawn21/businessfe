import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BusinessItem = ({ business, name }) => {
	const { company, description, link, logo, person, location } = business;

	return (
		<div>
			<div className="card">
				<div className="card-header">
					<h4>{company}</h4>
				</div>
				<div className="card-body">
					<h4>{description}.</h4>
					<div className="user">
						<div className="user-location">
							<h5>Name : {person}</h5>
						</div>
						<div className="user-info">
							<h5>Location : {location}</h5>
						</div>

						<Button variant="primary" size="sm" active>
							<a href={link} target="_blank">
								Go {company}
							</a>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BusinessItem;
