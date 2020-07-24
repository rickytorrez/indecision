const path = require('path');

module.exports = {
  // entry point is
  entry: './src/App.jsx',

  // output bundle file
  output: {
    // provide absolute path
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  // lets you set up an array of rules
  module: {
    rules: [
      {
        loader: 'babel-loader',
        // work on files that end on .jsx
        test: /\.jsx$/,
        exclude: /node_modules/,
      },
      {
        // work on files that end on .css
        test: /\.s?css$/,
        // use allows us provide an array of loaders
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
};
