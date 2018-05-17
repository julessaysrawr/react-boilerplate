const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
  },
  module: {    // converts files other than vanilla js into valid modules for app & dependency graph
    rules: [
      {
        test: /\.js$/,  // which files to be transformed
        exclude: ['node_modules'],
        use: [{ loader: 'babel-loader' }],  // which loader should to the transforming
      },
      {
        test: /\.s(a|c)ss$/,
        use: [{
          loader: 'style-loader'  // Adds CSS to the DOM by injecting a <style> tag
        }, {
          loader: 'css-loader'  // interprets @import and url() like import/require() and will resolve them.
        }, {
          loader: 'sass-loader'   // Loads a Sass/SCSS file and compiles it to CSS.
        }],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({   // generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
      template: 'index.html'
    }),
    new CleanWebpackPlugin(['dist']),
  ]
}