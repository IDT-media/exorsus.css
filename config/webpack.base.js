const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PKG = require('../package.json');
const CONFIG = PKG.config;

module.exports = {
    output: {
        path: path.resolve(CONFIG.path_dist),
        publicPath: path.join(path.basename(process.cwd()), CONFIG.path_dist)
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            },
        ]
    }
};
