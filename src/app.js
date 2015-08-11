import React from 'react';
import { Router } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import appRoutes from './routes/appRoutes';

React.render(
	<Router history={history} children={appRoutes}/>,
	document.getElementById('app')
);
