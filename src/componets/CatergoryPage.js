import React, { useState, useEffect } from 'react';
import BusinessItem from '../bus/BusinessItem';
import { Card, Button } from 'react-bootstrap';

const CatergoryPage = ({ image, name, description, business }) => {
	const [
		businesses,
		setBusiness
	] = useState([]);
	useEffect(() => {
		fetch('http://localhost:1337/businesses?_limit=3')
			.then((res) => res.json())
			.then((data) => {
				setBusiness(data);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div>
			<Card>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text> {business}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default CatergoryPage;
