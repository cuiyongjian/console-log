var webpack = require('webpack')
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var env = process.env.NODE_ENV


// 制作js类库项目时，需要修改的部分
var libraryName = 'log'
var plugins = []


if (env === 'production') {
  plugins.push(new UglifyJsPlugin())
  outputFile = libraryName + '.min.js'
}
else {
  outputFile = libraryName + '.js'
}


module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: outputFile,
    library: 'log',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.json']
  }
}
