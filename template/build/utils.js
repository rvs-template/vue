'use strict'
const path = require('path')
const config = require('../config')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const packageConfig = require('../package.json')

exports.assetsPath = function (_path) {
  const assetsSubDirectory =
    process.env.NODE_ENV === 'production'
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.styleLoaders = function () {
  return [
    {
      test: /\.less$/,
      use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader']
    },
    {
      test: /\.css$/,
      use: ['vue-style-loader', 'css-loader', 'postcss-loader']
    }
  ]
}
