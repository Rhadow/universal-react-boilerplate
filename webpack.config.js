var Webpack = require('webpack'),
    path = require('path');

var eslintrcPath = path.resolve(__dirname, '.eslintrc'),
    nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    buildPath = path.resolve(__dirname, 'build'),
    entryPath = path.resolve(__dirname, 'src', 'app.js'),
    sourcePath = path.resolve(__dirname, 'src');

var config = {
    devtool: 'eval',
    watch: true,
    entry: {
        app: [
            'webpack/hot/only-dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            entryPath
        ]
    },
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/build/'
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
                loaders: ['react-hot', 'babel'],
                include: sourcePath
            },
            {
                test: /\.(css|scss)$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url?limit=8192'
            },
            {
                test : /\.(woff|woff2|ttf|eot)$/,
                loader: 'url'
            }
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
    eslint: {
        configFile: eslintrcPath
    }
};

module.exports = config;
