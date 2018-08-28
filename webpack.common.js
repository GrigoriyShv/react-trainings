const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path')
const variables = require('./variables.js');

module.exports = {
    entry: "./src/app.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({  // 
            filename: 'index.html',
            template: 'src/index.ejs',
            title: variables.title,
            greetings: variables.greetings
        })
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'app.js',
        sourceMapFilename: 'sourceMap.map.js'
    }
};