const rules = require('./webpack.rules')
const webpack = require('webpack')

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
})

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    fallback: {
      url: require.resolve('url'),
      fs: require.resolve('graceful-fs'),
      buffer: require.resolve('buffer'),
      stream: require.resolve('stream-browserify'),
      constants: require.resolve('constants-browserify'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
      const mod = resource.request.replace(/^node:/, '')
      switch (mod) {
        case 'buffer':
          resource.request = 'buffer'
          break
        case 'stream':
          resource.request = 'readable-stream'
          break
        default:
          throw new Error(`Not found ${mod}`)
      }
    }),
  ],
}