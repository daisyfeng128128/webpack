const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

function recursiveIssuer (m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

module.exports = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          { loader: "imports-loader?this=>window" }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'assets/',
            limit: 10240
          }
        }
      }, {
        test: /\.(woff|eot|ttf|svg)(\?.*$|$)/,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
  optimization: {
    // 低版本webpack在文件没有修改情况下打包hash值更改兼容成不改文件hash不动
    runtimeChunk: {
      name: 'runtime'
    },
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      // minSize: 30000,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // automaticNameMaxLength: 30,
      // name: true,
      cacheGroups: {
        // fooStyles: {
        //   name: 'main',
        //   test: (m, c, entry = 'main') =>
        //     m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
        //   chunks: 'all',
        //   enforce: true,
        // },
        // barStyles: {
        //   name: 'main1',
        //   test: (m, c, entry = 'main2') =>
        //     m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
        //   chunks: 'all',
        //   enforce: true,
        // },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors'
        },
        // default: {
        //   priority: -20,
        //   reuseExistingChunk: true,
        //   name: 'common'
        // }
      }
    },
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  }), new CleanWebpackPlugin(),
  // 垫片
  new webpack.ProvidePlugin({
    $: 'jquery'
  })
  ],
  performance: false,
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../dist')
  }
};
