import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import CategoryCard from './CatergoryCard';

const Category = () => {
	const [
		categories,
		setCategory
	] = useState([]);
	useEffect(() => {
		fetch('https://entrepreneurpages.herokuapp.com/categories?_limit=6')
			.then((res) => res.json())
			.then((data) => {
				setCategory(data);
			})
			.catch((err) => console.log(err));
	});
	return (
		<section className="category">
			<h1 className="text-center large"> Categories</h1>
			<div className="grid-4 container">
				{' '}
				{categories.map((category) => (
					<CategoryCard
						key={category.id}
						category={category}
						name={category.name}
						description={category.description}
						image={category.images}
					/>
				))}
			</div>
			<div className="text-center card-button">
				{' '}
				<Button variant="primary" size="lg" active>
					<Link to="/catergory"> More Categories</Link>
				</Button>{' '}
			</div>
		</section>
	);
};

export default Category;
