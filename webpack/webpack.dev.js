const webpack = require('webpack');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const DotEnvWebpackPlugin = require('dotenv-webpack');

const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('dev'),
    }),
    new ReactRefreshWebpackPlugin(),
    new DotEnvWebpackPlugin({
      path: './.env.development',
    }),

    new ESLintPlugin({
      extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
      failOnError: true,
      failOnWarning: false,
      emitWarning: true,
      emitError: true,
    }),
  ],
};
