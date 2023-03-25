const webpack = require('webpack')

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.js',
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
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