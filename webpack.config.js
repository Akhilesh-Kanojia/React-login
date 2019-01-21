const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const publicPath = './public/app/';
const webpackPort = 4005;

module.exports = {
   entry: './src/main.js',
   output: {
      filename: 'index_bundle.js',
      path: path.resolve(__dirname, '../', 'public'),
      publicPath: `http://localhost:${webpackPort}/`
   },
   devServer: {
      inline: true,
      port: 4005,
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'eslint-loader',
            options: {
               failOnWarning: true,
               failOnerror: true
            },
            exclude: /node_modules/
         },
         {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
         },
         { 
            test: /\.scss$/, 
            loader: [
               'style-loader', 
               'css-loader',
               'sass-loader'
            ] 
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
};