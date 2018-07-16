const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.config');

module.exports = {
  ...baseConfig,
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
        test: /\.graphql$/,
      },
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        test: /\.tsx?$/,
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { minimize: true },
          },
          {
            loader: 'sass-loader',
            options: { outputStyle: 'compressed' },
          },
        ],
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      { test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    ...baseConfig.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].[chunkhash].css',
    }),
  ],
};
