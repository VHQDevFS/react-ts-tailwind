const webpack = require('webpack')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const DotEnvWebpackPlugin = require('dotenv-webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('production'),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
    }),
    new DotEnvWebpackPlugin({
      path: './.env.production',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    new ESLintPlugin({
      extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
      failOnError: true,
      failOnWarning: true,
      emitWarning: true,
      emitError: true,
    }),
  ],
}
