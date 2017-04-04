module.exports = {
  entry : {
    bundle : ['./src/index.js']
  },
  output : {
    path : __dirname + '/public/js',
    filename : '[name].js',
    publicPath : 'public'
  },
  devServer : {
    inline : true,
    contentBase : './public',
    port : 8888

  },
  module :{
    loaders : [
      {
        test : /\.js$/,
        loader : 'babel-loader'

      }
    ]
 }

}
