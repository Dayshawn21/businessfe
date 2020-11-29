import React, { useState, useEffect } from 'react';

import axios from 'axios';
import CategoryCard from './CatergoryCard';

const Category = () => {
	const [categories, setCategory] = useState([]);

	useEffect(() => {
		const fetchCategory = async () => {
			const { data } = await axios.get(
				`https://entrepreneurpages.herokuapp.com/categories`,
			);
			setCategory(data);
		};

		fetchCategory();
	}, []);
	return (
		<section className='category'>
			<h1 className='text-center large'> Categories</h1>
			<div className='grid-4 container'>
				{' '}
				{categories.map((category, key) => (
					<CategoryCard key={category._id} category={category} />
				))}
			</div>
			<div className='text-center card-button'> </div>
		</section>
	);
};

export default Category;
