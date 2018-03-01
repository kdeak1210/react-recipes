const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: {
    app: './src/app.js' 
  },
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  devtool: 'source-map',
  plugins: process.env.NODE_ENV == 'production' ? [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: true
      }
    })
  ]: [],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  watchOptions: {
    poll: true
  }

}