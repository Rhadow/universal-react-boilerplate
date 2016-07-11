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
import NotFoundPage from './components/not-found';

const appRoutes = () => (
    <Router history={browserHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/profile" component={Profile} />
        </Route>
        <Route path="*" component={NotFoundPage} />
    </Router>
);

export default appRoutes;
