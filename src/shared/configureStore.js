// Redux
import { createStore, compose } from 'redux';
import rootReducer from './modules';

let finalCreateStore = createStore;
/* eslint-disable */
if (__DEVELOPMENT__) {
    if (__CLIENT__) {
        finalCreateStore = compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )(createStore);
    }
}
/* eslint-enable */

export default function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState);
}
