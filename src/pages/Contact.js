import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import ContactForm from '../componets/ContactForm';
import BusinessForm from '../componets/BusinessForm';

const Contact = () => {
	return (
		<section className="contact">
			<div className="container py-4">
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
