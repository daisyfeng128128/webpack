const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8090
  },
  entry: {
    main: './src/index.js',
    // sub: './src/index.js'
  },
  //简写-> entry: 'src/index.js',
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'assets/',
            limit: 20480
          }
        }
      }, {
        test: /\.(woff|eot|ttf|svg)(\?.*$|$)/,
        use: {
          loader: 'file-loader',
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        }, 'sass-loader', 'postcss-loader']
      }
    ]
  },
  output: {
    // publicPath: 'http://cdn.com.cn',
    publicPath: '/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  }), new CleanWebpackPlugin()]
};
