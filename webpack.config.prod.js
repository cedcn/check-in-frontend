const webpack = require('webpack');
const config = require('./webpack.config.base');

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),

  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
])
module.exports = config;
