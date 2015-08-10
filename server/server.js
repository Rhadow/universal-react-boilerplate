import path from 'path';
import fs from 'fs';

import React from 'react';

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import apiRoutes from '../src/routes/apiRoutes';

import Router from 'react-router';
import Location from 'react-router/lib/Location';
import appRoutes from '../src/routes/appRoutes.js';

import httpProxy from 'http-proxy';
import webpackDevServer from './webpackDevServer.js';

const proxy = httpProxy.createProxyServer();
const isProduction = process.env.NODE_ENV === 'production';
const app = express();

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
}

app.use((req, res) => {
	const location = new Location(req.path, req.query);
	Router.run(appRoutes, location, (err, routeState) => {
		if (err) {
			return console.error(err);
		}
		const InitialComponent = (
			<Router {...routeState} />
		);
		const componentHtml = React.renderToString(InitialComponent);
		let resultHtml = indexHtml.replace('${componentHtml}', componentHtml);
		res.end(resultHtml);
	});
});


export default app;
