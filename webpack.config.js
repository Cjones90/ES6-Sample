'use strict';

const webpack = require('webpack');

module.exports = [{
  entry: {
    app: "./src/client/home.jsx",
  },
  output: {
    publicPath: "pub/",
    path: `${__dirname}/pub`,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.less$/, loaders: ["style-loader", "css-loader", "less-loader"]},
      { test: /\.jsx$/, loader: 'babel-loader', query: {cacheDirectory: true, presets: ['react', 'es2015']} },
      { test: /\.js$/, loader: 'babel-loader', query: {cacheDirectory: true, presets: ['react', 'es2015']} },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less']
  }
}]
