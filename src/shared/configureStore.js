// Redux
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';

let finalCreateStore = createStore;
/* eslint-disable */
if (__DEVELOPMENT__) {
    if (__CLIENT__) {
        finalCreateStore = compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )(createStore);
    } else {
        finalCreateStore = compose(
            applyMiddleware(thunk)
        )(createStore);
    }
}
/* eslint-enable */

export default function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState);
}
