//const title = 'Chapter 3: The wrong way to draw a line'
//const slug = 'wrong-way-to-draw-a-line'
const path = require('path').resolve(__dirname)
//const config = require('@velvetkevorkian/sketch-boilerplate-p5').config

//module.exports = env => config(title, slug, path, env)
const TerserPlugin = require('terser-webpack-plugin')
//const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: path + '/src/index.js',
  //plugins: [
  //  new CleanWebpackPlugin([path + '/' + slug], {
  //    allowExternal: true
  //  }),
  //],
  output: {
    filename: '[name].js',
    path: path + '/' + 'lib',
  },
  mode: 'production',
  resolve: {
    alias: {
      p5: 'p5/lib/p5.min.js'
    }
  },
  optimization: {
    minimizer: [
      new TerserPlugin()
    ]
  },
}
