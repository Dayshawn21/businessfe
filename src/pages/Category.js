import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../componets/Catergory.scss';

const Category = ({ business, key }) => {
	const [
		categories,
		setCategory
	] = useState([]);
	const [
		businesses,
		setBusiness
	] = useState([]);
	useEffect(() => {
		fetch('https://entrepreneurpages.herokuapp.com/categories?_sort=name:ASC')
			.then((res) => res.json())
			.then((data) => {
				setCategory(data);
			})
			.catch((err) => console.log(err));

	});
	return (
		<section className="catergory-page">
			<div className="container">
				<h1 className="text-center x-large">Categories</h1>
				<div>
					{categories.map((category, id) => (
						<div>
							<div id={category.id} className="card-header">
								<h1>
									{category.name} <i className={category.description} />
								</h1>
							</div>
							<div className="card-body grid-4">
								{category.businesses.map((business, i) => (
									<div key={i} className="card">
										<div className="card-header">
											<h2>{business.company}</h2>
										</div>
										<div className="card-body">
											<h4>{business.description}</h4>
											<div className="user">
												<div className="user-location">
													<h5>Name: {business.person}</h5>
												</div>
												<div className="user-info">
													<h5>Location: {business.location}</h5>
												</div>

												<Button variant="primary" size="sm" active>
													<a href={business.link} target="_blank">
														Go {business.company}
													</a>
												</Button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Category;
