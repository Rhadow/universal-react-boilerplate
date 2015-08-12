// Node
import path from 'path';
import fs from 'fs';

// React
import React from 'react';

// Express
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// Router
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import appRoutes from '../src/routes/appRoutes.js';
import apiRoutes from '../src/routes/apiRoutes';

// Webpack
import httpProxy from 'http-proxy';
import webpackDevServer from './webpackDevServer.js';

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../src/reducers';

const proxy = httpProxy.createProxyServer();
const isProduction = process.env.NODE_ENV === 'production';
const app = express();

process.env.BROWSER = false;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));

const indexHtml = fs.readFileSync(path.join(__dirname, '..', 'assets', 'index.html'), { encoding: 'utf-8' });

app.use('/api', apiRoutes);

if (!isProduction) {
	webpackDevServer();
	app.all('/build/*', (req, res) => {
		proxy.web(req, res, {
            target: 'http://localhost:8080'
        });
	});
} else {
	app.use('/build', express.static(path.join(__dirname, '..', 'build')));
}

app.use((req, res, next) => {
	const location = new Location(req.path, req.query);
	const reducer = combineReducers(reducers);
    const store = createStore(reducer);

	Router.run(appRoutes, location, (err, routeState) => {
		if (!routeState) {
			return next();
		}
		const initialView = React.renderToString(
			<Provider store={store}>
			    {() => <Router {...routeState} />}
			</Provider>
		);
		const initialState = JSON.stringify(store.getState());
		let resultHtml = indexHtml
		    .replace('${initialView}', initialView)
		    .replace('${initialState}', initialState);
		res.end(resultHtml);
	});
});

app.get('*', function(req, res) {
    res.send('404 - Page Not Found');
});

export default app;
