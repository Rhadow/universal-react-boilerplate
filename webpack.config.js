import Webpack from 'webpack';
import path from 'path';

let eslintrcPath = path.resolve(__dirname, '.eslintrc'),
    nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    buildPath = path.resolve(__dirname, 'build'),
    entryPath = path.resolve(__dirname, 'src', 'client', 'app.js'),
    sourcePath = path.resolve(__dirname, 'src');

let config = {
    devtool: 'eval',
    entry: {
        app: [
            'eventsource-polyfill',
            'webpack-hot-middleware/client',
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
                loaders: ['babel'],
                include: sourcePath
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss']
            }
        ]
    },
    plugins: [
        new Webpack.optimize.OccurenceOrderPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    eslint: {
        configFile: eslintrcPath
    },
    postcss: () => {
        return [];
    }
};

export default config;
