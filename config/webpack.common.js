const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PKG = require('../package.json');
// Config
const BASE = require('./webpack.base');

module.exports = merge(BASE, {
    entry: {
        exorsus: './src/exorsus.less'
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin({
            '__DEV__': process.env.NODE_ENV !== 'production',
            '__PROD__': process.env.NODE_ENV === 'production',
            '__VERSION__': JSON.stringify(PKG.version),
        }),
    ]
});
