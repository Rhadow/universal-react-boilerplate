import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
} from 'react-router';
// Components
import App from './containers';
import UserPicPage from './containers/User-Pic-Page/User-Pic-Page';
import UserSelectPage from './containers/User-Select-Page/User-Select-Page';
import NotFoundPage from './containers/Not-Found-Page/Not-Found-Page';

const appRoutes = () => (
    <Router history={browserHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={UserSelectPage} />
            <Route path="/pic" component={UserPicPage} />
        </Route>
        <Route path="*" component={NotFoundPage} />
    </Router>
);

export default appRoutes;
