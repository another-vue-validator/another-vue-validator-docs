'use strict';

const pjson = require('./package.json');
var path = require('path');

module.exports = {
  publicPath: 'avv',
  outputDir: 'docs',

  configureWebpack: config => {
    // Slower sourcemaps but more accurate
    config.devtool = 'source-map';
  },

  devServer: {
    historyApiFallback: true,
    noInfo: false,
    hot: true,
    inline: true,
    // https: true,
    port: 8085,
    contentBase: path.resolve(__dirname, 'src'),
    openPage: 'index.html',
    open: true,

    proxy: {

      '/avv-docs': {
        target: 'http://localhost:8085',
      }
    }
  }
};

