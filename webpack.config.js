var path = require('path');

module.exports = {
  entry: './es6/main.js',
  output: {
    path: __dirname,
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'es6'),
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    noInfo: false,
    colors: true
  }
};