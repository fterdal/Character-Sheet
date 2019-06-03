module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill', // enables async-await
    './client/index.js',
  ],
  output: {
    path: __dirname,
    filename: './bundle.js',
  },
  devServer: {
    port: 8080,
    contentBase: './public',
    historyApiFallback: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
}
