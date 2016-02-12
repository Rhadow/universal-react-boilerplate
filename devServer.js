import webpack from 'webpack';
import app from './src/server';
import config from './webpack.config';
import path from 'path';

const compiler = webpack(config);
const NODE_PORT = process.env.NODE_PORT || 3000;
const NODE_HOST = process.env.NODE_HOST || '0.0.0.0';

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(NODE_PORT, NODE_HOST, (err) => err ?
	console.error(err) :
	console.log(`Listening at http://${NODE_HOST}:${NODE_PORT}`)
);
