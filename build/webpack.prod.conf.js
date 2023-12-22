const chalk = require('chalk');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { getCssLoaders, subDir } = require('./utils');
const baseConfig = require('./webpack.base.conf');

const prodConfig = {
  output: {
    filename: subDir('js/[name].[contenthash:8].js'),
    chunkFilename: subDir('js/[name].[contenthash:8].js'),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: getCssLoaders(),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: subDir('css/[name].[contenthash:8].css'),
      chunkFilename: subDir('css/[name].[contenthash:8].css'),
    }),
    new ProgressBarPlugin({
      total: 100,
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
    }),
  ],
};
if (config.buildDetail) {
  prodConfig.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerPort: 8899,
    }),
  );
}

module.exports = merge(baseConfig, prodConfig);
