const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    registro: '../Frontend/js/interface/registroUI.js',
    login: '../Frontend/js/interface/loginUI.js',
    lotes: '../Frontend/js/interface/lotesUI.js',
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../Frontend/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: '../Frontend/html/registro.html',
      filename: 'html/registro.html',
    }),
  ]
};