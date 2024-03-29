var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'none', // development
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_module/,
            use:{
                loader: 'babel-loader'
            }
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_module/,
          use: {
            loader: "ts-loader",
          },
        },
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack servers',
      template: './public/template.ejs',
      inject: false,
      minify: true,   // 압축 설정

      templateParameters: {
        title: 'Webpack Build ENV', // 문서 타이틀
        lang: 'ko-KR',             // 주 언어 명시
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  devServer: {
    port: 5555,
  },
};

