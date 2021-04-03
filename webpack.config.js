const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundlemov1.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development'
};