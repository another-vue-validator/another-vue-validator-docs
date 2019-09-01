'use strict';

const pjson = require('./package.json');
var path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'another-vue-validator-docs'
  : 'avv',

  outputDir: 'docs',

  configureWebpack: config => {
    // Slower sourcemaps but more accurate
    config.devtool = 'source-map';

    config.plugins.push(
      new CopyPlugin([
        { from: 'src/examples', to: 'examples' }
      ]),

    );
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

