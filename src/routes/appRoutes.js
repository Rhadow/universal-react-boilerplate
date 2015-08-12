import React from 'react';
import { Route } from 'react-router';

import App from '../components/App/App';
import Todo from '../containers/Todo/Todo';
import About from '../containers/About/About';

export default (
	<Route component={App}>
	    <Route path="/" component={Todo} />
	    <Route path="/about" component={About} />
	</Route>
);
