const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/index.js',
    // sub: './src/index.js'
  },
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8090,
    hot: true,
    // hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            modules: true
          }
        }, 'sass-loader', 'postcss-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  //简写-> entry: 'src/index.js',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(commonConfig, devConfig);
