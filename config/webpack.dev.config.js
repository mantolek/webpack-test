const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const webpackConfig = merge(commonConfig, {
  mode: 'development',
  devtool: false,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[id].chunk.js',
  },
  plugins: [new FriendlyErrorsWebpackPlugin()],
});

if (process.env.REPORT) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

  webpackConfig.devtool = 'source-map';
  webpackConfig.plugins.push(new BundleAnalyzerPlugin({
    statsFilename: './stats.json'
  }));
}

module.exports = webpackConfig;
