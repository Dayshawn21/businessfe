import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardDeck} from 'react-bootstrap'
import IMG1 from '../img/cartoon-money-venture-capital-funding-investment-business-film-finance-organization-png-clip-art.png'

const Category = () => {
  
	return (
		<div>
			<h1 className='text-center'> What are you looking For</h1>
      <CardDeck>
  <Card border='danger' style={{ width: '30em' }}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Fitness</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link> Find Fitness</Link>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Finance</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Link> Find Finance</Link>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Services</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link> Find Services</Link>
    </Card.Footer>
  </Card>
</CardDeck>
		</div>
	);
};

export default Category;
