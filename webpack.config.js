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
};
