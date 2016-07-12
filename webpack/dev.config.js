var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var eslintrcPath = path.resolve(__dirname, '..', '.eslintrc');
var nodeModulesPath = path.resolve(__dirname, '..', 'node_modules');
var entryPath = path.resolve(__dirname, '..', 'src', 'client.js');
var buildPath = path.resolve(__dirname, 'dist');

// Raise tread pool size to prevent bundling stuck issue
process.env.UV_THREADPOOL_SIZE = 100;

var config = {
    devtool: 'eval',
    entry: {
        app: [
            entryPath
        ]
    },
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js(x)?$/,
                loader: 'eslint',
                exclude: nodeModulesPath
            }
        ],
        loaders: [
            {
                test: /\.js(x)?$/,
                loader: 'babel',
                exclude: nodeModulesPath
            },
            {
                test: /\.(css)$/,
                loaders: ['style', 'css', 'postcss']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "__CLIENT__": true,
            "__SERVER__": false,
            "__DEVELOPMENT__": true,
            "process.env": {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modules: [
            path.resolve('../src'),
            'node_modules'
        ]
    },
    eslint: {
        configFile: eslintrcPath
    },
    postcss: () => {
        return [autoprefixer, precss];
    },
    devServer: {
        "hot": true,
        "quiet": false,
        "noInfo": true,
        "proxy": {
            '*': {
                "target": 'http://127.0.0.1:' + (process.env.PORT || 3000),
                "secure": false
            }
        },
        "host": '127.0.0.1',
        "stats": {
            "colors": true
        }
    }
};

module.exports = config;
