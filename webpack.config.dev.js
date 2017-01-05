const webpack = require('webpack');
const config = require('./webpack.config.base');
const path = require('path');

// config.stats.warnings = false;
config.devServer = {
  // hot: true,
  inline: true,
  port: 9000,
  proxy: {
    '/api': 'http://127.0.0.1:8000/',
    '/admin': 'http://127.0.0.1:8000/'
  },
  compress: true,
  stats: {
    warnings: false,
    chunkModules: false,
  },
  noInfo: true
}

// config.plugins.concat([
//   new webpack.HotModuleReplacementPlugin()
// ]);

config.devtool = "source-map";

module.exports = config;
