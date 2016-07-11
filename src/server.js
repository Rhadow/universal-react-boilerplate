import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext , match } from 'react-router';
import { Provider } from 'react-redux';
import appRoutes from './shared/routes';
import configureStore from './shared/configureStore';

const app = express();
const createView = (html, state) => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Universal Redux Demo</title>
            </head>
            <body>
                <div id="react-view">${html}</div>
                <script type="application/javascript">
                    window.__INITIAL_STATE__ = ${JSON.stringify(state)};
                </script>
                <script type="application/javascript" src="/bundle.js"></script>
            </body>
        </html>`;
}

app.use((req, res) => {
    let isNotFoundPage = false,
        store,
        initialComponentHtml,
        initialState,
        finalView;

    match({ routes: appRoutes(), location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            isNotFoundPage = renderProps.routes[1].path === '*';
            store = configureStore();
            initialState = store.getState();
            initialComponentHtml = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );
        }
    });
    finalView = createView(initialComponentHtml, initialState);
    res.status(isNotFoundPage ? 404 : 200).send(finalView);
});

export default app;
