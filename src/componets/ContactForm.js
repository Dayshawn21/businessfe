import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import NetlifyForm from 'react-netlify-form';

const ContactForm = () => {
	return (
		<div>
			<div className="text-center large">How Can I Help You</div>
			<NetlifyForm name="contact" canSubmit="true">
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
					<Form.Control type="text" placeholder="Enter Name" name='name' />
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email"  name='email' />
				</Form.Group>
				<Form.Group controlId="help">
					<Form.Label> How Can I Help You</Form.Label>
					<Form.Control as="textarea" rows="3"  name='message' />
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

export default ContactForm;
