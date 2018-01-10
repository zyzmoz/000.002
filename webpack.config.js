/*
  .webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: ['./src/index.js', './src/assets/css/foundation.css', './src/assets/css/master.css', './src/assets/css/menu.css'],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
      {
        test: /\.css$/,
        loaders: ["style-loader","css-loader"]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
