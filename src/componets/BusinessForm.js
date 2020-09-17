import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import NetlifyForm from 'react-netlify-form';

const BusinessForm = () => {
	return (
		<div>
			<div className="text-center large">Enter You Business</div>
			
		<form action="">
			<Form>
				<Form.Group controlId="name">
					<Form.Label> Name</Form.Label>
					<Form.Control type="text" placeholder="Enter Name" />
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>
				<Form.Group controlId="location">
					<Form.Label> Location </Form.Label>
					<Form.Control type="text" placeholder="Enter Name" />
				</Form.Group>
				<Form.Group controlId="">
					<Form.Label> Website</Form.Label>
					<Form.Control type="text" placeholder="Enter Name" />
				</Form.Group>
				<Form.Group controlId="help">
					<Form.Label> Description of Business</Form.Label>
					<Form.Control as="textarea" rows="3" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
</form>
		</div>
	);
};

export default BusinessForm;
