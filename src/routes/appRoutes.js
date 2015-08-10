import App from '../components/App/App';
import Profile from '../components/Profile/Profile';
import About from '../components/About/About';

export default {
    path: '/',
    component: App,
    childRoutes: [
        {
	        path: 'about',
	        component: About
	    }, {
	        path: 'profile',
	        component: Profile
	    }
    ]
};
