import React from 'react';
import { Route } from 'react-router';

import App from '../components/App/App';
import Profile from '../components/Profile/Profile';
import About from '../components/About/About';

export default (
	<Route path="/" component={App}>
	    <Route path="/profile" component={Profile} />
	    <Route path="/about" component={About} />
	</Route>
);
