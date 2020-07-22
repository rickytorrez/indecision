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
    ],
  },
};
