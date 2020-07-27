const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {
  mode: 'development',
	entry: {
    //index: './index.js',
    comps: './comps.js'
  },
	output: {
		filename: '[name].dist.js',
		path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },{
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin()
  ]
}