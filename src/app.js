import '../node_modules/material-design-lite/material.min.css';
import '../node_modules/material-design-lite/material.min.js';

import React from 'react';
import { Router } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import appRoutes from './routes/appRoutes';

const history = new BrowserHistory();

React.render(
	<Router history={history} children={appRoutes}/>,
	document.getElementById('app')
);
