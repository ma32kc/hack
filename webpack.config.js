const path = require('path');
const HtmlWebpackPlugin = require ("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: './src/client/App.tsx',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/client/index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.html']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
};