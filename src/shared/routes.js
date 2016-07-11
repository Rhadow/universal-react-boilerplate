import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
} from 'react-router';
// Components
import App from './components';
import Profile from './components/profile';
import Home from './components/home';

const appRoutes = () => (
    <Router history={browserHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/profile" component={Profile} />
        </Route>
    </Router>
);

export default appRoutes;
