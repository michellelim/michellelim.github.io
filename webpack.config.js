const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'assets/bundle');
const APP_DIR = path.resolve(__dirname, 'assets/src');

module.exports = {
    entry: APP_DIR + '/js/index.js',
    output: {
        path: BUILD_DIR,
        publicPath: 'assets/bundle',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        inline: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
            }
        ]
    }
};