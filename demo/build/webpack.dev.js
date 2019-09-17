const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  // devServer，开发环境下使用，线上没有这个
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
    hot: true,
    // hotOnly: true
    proxy: {
      "/react/api": {
        target: "http://www.dell-lee.com",
        secure: false, //https配置
        pathRewrite: {
          "header.json": "demo.json"
        },
        changeOrigin: true, //有些网站防止外部爬虫爬网站内容，此处设成true,就突破了这个限制，改变请求里origin选项，使代理支持更多的域名下的请求访问
        // 做请求转发时，可变更请求头
        headers: {
          host: 'www.abc.com',
          cookie: 'aaa' //请求转发时，模拟登陆、健全的场景
        },
        // 拦截
        bypass: function (req, res, proxyOptions) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          }
        }
      }
    }
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
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  }
};

module.exports = merge(commonConfig, devConfig);
