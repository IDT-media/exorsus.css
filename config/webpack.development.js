const webpack = require('webpack');
const merge = require('webpack-merge');
// Config
const COMMON = require('./webpack.common');

module.exports = merge(COMMON, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ]
});
