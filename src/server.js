import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { RouterContext , match } from 'react-router';
import appRoutes from './shared/routes'

const app = express();

app.use((req, res) => {
    let initialComponentHtml;
    match({ routes: appRoutes(), location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            // TODO: 404 page handling
            initialComponentHtml = renderToString(<RouterContext {...renderProps} />);
        }
    });
    const HTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Universal Redux Demo</title>
            </head>
            <body>
                <div id="react-view">${initialComponentHtml}</div>
                <script type="application/javascript" src="/bundle.js"></script>
            </body>
        </html>`;
    res.end(HTML);
});

export default app;
