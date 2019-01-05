const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(['wrong-way-to-draw-a-line']),
    new HtmlWebpackPlugin({
      title: 'Chapter 3: The wrong way to draw a line',
      template: 'index.html'
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'wrong-way-to-draw-a-line')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
