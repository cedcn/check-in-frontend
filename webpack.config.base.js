const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    app: './src/App.jsx'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/assets/',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: '/node_modules/',
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limi1t=2500'
      },
      {
        test: /\.scss|\.css$/,
        loader: 'style-loader!css-loader?minimize&modules&localIdentName=[local]__[hash:base64:10]!autoprefixer-loader!sass-loader',
        exclude: /node_modules/,
        // loader: ExtractTextPlugin.extract('style-loader', 'css?minimize&modules&localIdentName=[local]__[hash:base64:10]!postcss!sass')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?minimize!autoprefixer-loader',
        include: /node_modules/,
      },
      {
        test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: []
  },
  stats: "normal",
  cache: false,
  plugins: []
}


module.exports = config;
