const webpack = require('webpack')

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...(config.resolve && config.resolve.fallback),
      fs: false,
      net: false,
      tls: false,
      child_process: false,
      http: false,
      https: false,
      zlib: false,
      os: false,
      path: false,
      stream: false,
      util: require.resolve('util/'),
      url: require.resolve('url/'),
      assert: require.resolve('assert/')
    }
  }

  config.plugins = [
    ...(config.plugins || []),
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]

  return config
}