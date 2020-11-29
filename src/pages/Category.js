import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import '../componets/Catergory.scss';
import axios from 'axios';

import BusinessItem from '../bus/BusinessItem';

function Category({ match }) {
	const [category, setCategory] = useState([]);
	const [businesses, setBusiness] = useState([]);

	useEffect(() => {
		const fetchCategory = async () => {
			const { data } = await axios.get(
				`https://entrepreneurpages.herokuapp.com/categories/${match.params.id}`,
			);
			setCategory(data);
			setBusiness(data.businesses);
		};

		fetchCategory();
	}, []);

	return (
		<div className='category'>
			<div className='container'>
				<h1 className='text-center'>{category.name}</h1>
				<div className='grid-4 container'>
					{' '}
					{businesses.map((business, logo) => (
						<BusinessItem business={business} />
					))}{' '}
				</div>

				<Link className='btn btn-light my-3' to='/'>
					{' '}
					Go Back
				</Link>
			</div>
		</div>
	);
}

export default Category;
