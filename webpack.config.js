/* eslint-disable */
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader'

      },
      {
        test: /\.css$/,
        loader: ['style-loader','css-loader']

      }
    ]
  }
}
