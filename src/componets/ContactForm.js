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
							<div>
							<input type="hidden" name="contact" value="contact" />
							<input type="text" name="name" placeholder="Name" required />
							<input type="email" name="email" placeholder="Email" required />
							<textarea
								type="textarea"
								name="message"
								cols="30"
								rows="10"
								placeholder="How can I help you"
								required
							/>
							<br />
							<Button variant="primary"  type="submit" size="lg" active>
									Submit
				</Button>{' '}
						</div>


						)}
						</div>
				)}
				</NetlifyForm>
		</div>
	);
};

export default ContactForm;
