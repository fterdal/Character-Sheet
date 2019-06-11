const path = require('path')
const isDev = process.env.MODE === 'DEV'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    'babel-polyfill', // enables async-await
    './client/index.js',
  ],
  output: {
    path: isDev ? __dirname : path.join(__dirname, 'public'),
    filename: './bundle.js',
  },
  devServer: {
    port: 8080,
    contentBase: './public',
    historyApiFallback: true,
    // 👇 Do this if you wanna serve openly on the local network:
    // host: '0.0.0.0',
    // allowedHosts: ['finns-macbook-pro.local:8080'],
    // disableHostCheck: true,
  },
  devtool: isDev ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
}
