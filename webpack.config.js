module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules(?!\/quill-image-drop-module|quill-image-resize-module)/,
      loader: 'babel-loader',
      query: {...}
    }
  ]
}
<<<<<<< HEAD
plugins: [
  new webpack.ProvidePlugin({
    'window.Quill': 'quill'
  })
]
=======
// plugins: [
//   new webpack.ProvidePlugin({
//     'window.Quill': 'quill'
//   })
// ]
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

const { paths } = require('react-app-rewired');
// require normalized overrides
const overrides = require('react-app-rewired/config-overrides');
const config = require(paths.scriptVersion + '/config/webpack.config.dev');

module.exports = overrides.webpack(config, process.env.NODE_ENV);
