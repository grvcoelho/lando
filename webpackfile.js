const webpack = require('webpack')
const path = require('path')

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['babel-loader', 'eslint-loader']
  }
]

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, './build'),
    filename: 'lando.js'
  },
  module: { rules }
}
