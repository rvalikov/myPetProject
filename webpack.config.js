const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports={
plugins:[
    new HTMLWebpackPlugin({
        template:path.join(__dirname, 'src', 'template.html'),
        filename: 'index.html',
    }),
],
}