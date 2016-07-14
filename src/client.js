import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './shared/configureStore';
import appRoutes from './shared/routes';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

render(
    <Provider store={store}>
        {appRoutes()}
    </Provider>,
    document.getElementById('react-view')
);
