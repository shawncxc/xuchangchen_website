const webpack = require('webpack');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: [
    path.resolve(ROOT_PATH, 'app/src/index'),
  ],
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=20000',
        include: path.resolve(ROOT_PATH, 'app/style/asset')
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      component: path.resolve(ROOT_PATH, 'app/src/component/'),
      style: path.resolve(ROOT_PATH, 'app/style/'),
      asset: path.resolve(ROOT_PATH, 'app/style/asset/')
    }
  },
  output: {
    path: path.resolve(ROOT_PATH, 'app/public/build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  }
};
