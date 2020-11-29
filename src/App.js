import React, { Fragment } from 'react';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import BusinessState from './context/businessState';
import Business from './bus/Business';
import Home from './pages/Home';
import Category from './pages/Category';

import './App.scss';
import Contact from './pages/Contact';

function App() {
	return (
		<BusinessState>
			<Router>
				<Fragment>
					<Navbar />

					<Switch>
						<Route exact path='/' component={Home} exact />
						<Route exact path='/categories/:id' component={Category} />
						<Route exact path='/contact' component={Contact} />
					</Switch>
					<Footer />
				</Fragment>
			</Router>
		</BusinessState>
	);
}

export default App;
