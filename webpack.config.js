var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
