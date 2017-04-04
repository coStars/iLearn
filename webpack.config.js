module.exports = {
  entry : {
    bundle : ['./assets/javascript/index.js']
  },
  output : {
    path : __dirname + '/assets',
    filename : '[name].js',
    publicPath : 'assets'
  },
  devServer : {
    inline : true,
    contentBase : './assets',
    port : 8888

  },
  module :{
    loaders : [
      {
        test : /\.js$/,
        loader : 'babel-loader'

      }
    ]
  },
  node : {
    fs : 'empty',
    net : 'empty',
    tls : 'empty'
  }

}
