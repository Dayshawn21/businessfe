import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import NetlifyForm from 'react-netlify-form';

const BusinessForm = () => {
	return (
		<div>
			<div className="text-center large">Enter You Business</div>
			<NetlifyForm name="business" canSubmit="true">
				{({ loading, error, success }) => (
					<div>
						{loading && <div>Loading...</div>}
						{error && <div>Your information was not sent. Please try again later.</div>}
						{success && <div>Thank you for contacting us!</div>}
						{!loading &&
						!success && (

			<Form>
				<Form.Group controlId="name">
					<Form.Label> Name</Form.Label>
					<Form.Control type="text" placeholder="Enter Name" />
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>
				<Form.Group controlId="name">
					<Form.Label> Location </Form.Label>
					<Form.Control type="text" placeholder="Enter Name" />
				</Form.Group>
				<Form.Group controlId="name">
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
						)}
			</div>
				)}
			</NetlifyForm>
		</div>
	);
};

export default BusinessForm;
