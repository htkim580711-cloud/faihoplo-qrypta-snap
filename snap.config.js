const { resolve } = require('path');

module.exports = {
  input: resolve(__dirname, 'src/index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  server: {
    port: 8080,
  },
};
