import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const CatergoryCard = ({ image, category, name, description }) => {
	return (
		<div className="text-center">
			<i className={description} />
			<h2>{name}</h2>
		</div>
	);
};

export default CatergoryCard;
