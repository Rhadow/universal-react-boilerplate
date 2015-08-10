import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import httpProxy from 'http-proxy';
import webpackDevServer from './webpackDevServer.js';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import appRoutes from '../src/routes/appRoutes.js';
import apiRoutes from '../src/routes/apiRoutes';

const app = express();
const PORT = process.env.PORT || 3000;
const staticPath = path.resolve(__dirname, 'static');
const proxy = httpProxy.createProxyServer();
const isProduction = process.env.NODE_ENV === 'production';

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(staticPath));

app.use('/api', apiRoutes);

if (!isProduction) {
	webpackDevServer();
	app.all('/build/*', (req, res) => {
		proxy.web(req, res, {
            target: 'http://localhost:8080'
        });
	});
}

app.listen(PORT, () => {
	console.log(`server running on port: ${PORT}`);
});
