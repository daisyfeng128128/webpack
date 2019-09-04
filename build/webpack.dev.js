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
  //简写-> entry: 'src/index.js',
  optimization: {
    usedExports: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(commonConfig, devConfig);
