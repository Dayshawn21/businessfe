import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';

const BusinessItem = ({ business }) => {
	return (
		<div className='py-3 grid-4'>
			<Card style={{ fontSize: '1rem' }}>
				<ListGroup.Item style={{ fontSize: '2rem' }}>
					{business.company}
				</ListGroup.Item>
				<ListGroup variant='flush'>
					<ListGroup.Item> Description: {business.description}</ListGroup.Item>
					<ListGroup.Item> Owner: {business.person}</ListGroup.Item>
					<ListGroup.Item>Location: {business.location}</ListGroup.Item>
				</ListGroup>
				<ListGroup.Item>
					<Button variant='primary' className='btn-block' active>
						<a href={business.link} target='_blank'>
							Go {business.company}
						</a>
					</Button>
				</ListGroup.Item>
			</Card>
		</div>
	);
};

export default BusinessItem;
