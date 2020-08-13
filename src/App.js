import React, { Fragment } from 'react';
import Navbar from './componets/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BusinessState from './context/businessState';
import Business from './bus/Business';
import Home from './pages/Home' 

import './App.scss';

function App() {
	return (
		<BusinessState>
			<Router>
				<Fragment>
					<Navbar />
					<div>
					<Switch>
							<Route exact path="/" component={Home} />
						</Switch>	
					
					</div>
				</Fragment>
			</Router>
		</BusinessState>
	);
}

export default App;
