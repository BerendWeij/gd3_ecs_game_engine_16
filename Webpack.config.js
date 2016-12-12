var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname, 'lib'),
         publicPath: "/lib/",
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['latest']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
