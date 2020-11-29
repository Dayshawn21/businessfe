import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Col, Row } from 'react-bootstrap';

const CatergoryCard = ({ category }) => {
	return (
		<div className='text-center'>
			<Row>
				<Col>
					<Link to={`/categories/${category._id}`}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<i className={category.description} />
							</ListGroup.Item>
							<ListGroup.Item>
								<h2>{category.name}</h2>
							</ListGroup.Item>
						</ListGroup>
					</Link>
				</Col>
			</Row>
		</div>
	);
};

export default CatergoryCard;
