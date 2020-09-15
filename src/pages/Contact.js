import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import ContactForm from '../componets/ContactForm';
import BusinessForm from '../componets/BusinessForm';

const Contact = () => {
	return (
		<section className="contact">
			<div className="container py-4">
				<ContactForm />
				<h1 className="large text-center">OR</h1>
				<BusinessForm />
			</div>
		</section>
	);
};

export default Contact;
