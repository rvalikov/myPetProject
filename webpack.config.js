const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports={
    
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
      },
    entry: path.join(__dirname, 'src', 'index.js'),
    module: {
             rules: [
               {
                 test: /\.js$/,
                 use: 'babel-loader',
                 exclude: /node_modules/,
               },
             ],
           },
plugins:[
    new HTMLWebpackPlugin({
        template:path.join(__dirname, 'src', 'template.html'),
        filename: 'index.html',
    }),
    new FileManagerPlugin({
               events: {
                 onStart: {
                   delete: ['dist'],
                 },
               },
             }),
],
devServer:{
    watchFiles: path.join(__dirname, 'src'),
    port:9000,
}
}