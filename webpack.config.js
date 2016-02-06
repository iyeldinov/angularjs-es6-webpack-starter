"use strict";
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client/app/app.module.js'),
  cache : true,
  debug: true,
  devtool: '#source-map',
  output: {
    path: path.resolve(__dirname, 'client/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
       { test: /\.js$/, include: path.resolve(__dirname, 'client/app/'), loader: 'ng-annotate?map=false!babel-loader',  presets: ['es2015'] },
       { test: /\.html$/, include: path.resolve(__dirname, 'client/app/'), loader: 'raw' },
       { test: /\.styl$/, loader: 'style!css!stylus' },
       { test: /\.css$/, loader: 'style!css' }
    ]
  },
  resolve: {
    root: [
      path.resolve(__dirname),
      path.resolve(__dirname, 'client/app/')
    ]
  }
};
