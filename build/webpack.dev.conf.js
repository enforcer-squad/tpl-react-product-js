const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { merge } = require('webpack-merge');
const { config } = require('./config');
const { resolve, getCssLoaders, subDir } = require('./utils');
const baseConfig = require('./webpack.base.conf');

const devConfig = merge(baseConfig, {
  experiments: {
    lazyCompilation: true,
  },
  devServer: config.devServer,
  module: {
    rules: getCssLoaders(),
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin(), new ESLintPlugin()],
});

module.exports = devConfig;
