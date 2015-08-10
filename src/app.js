import '../node_modules/material-design-lite/material.min.css';
import '../node_modules/material-design-lite/material.min.js';

import React from 'react';
import { Router } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import appRoutes from './routes/appRoutes';

React.render(
	<Router history={history} children={appRoutes}/>,
	document.getElementById('app')
);
