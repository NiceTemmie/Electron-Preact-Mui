//Main webpack config file, used both in dev and prod
//See: https://webpack.js.org/guides/production/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Specify here options needed all the time
module.exports = {

  //Entry points
  entry: {
    index: './src/index.js',
  },

  //Output config
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  //Generate automatically the html file, so you don't have to worry about it
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Electron-Preact-MDC',
    }),
  ],

  module: {
   rules: [
     {
       //Allows css file to be compiled, you may use different compiler for prod
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
       //Use babel to compile js and jsx files
       //.babelrc specify to use @babel/plugin-transform-react-jsx for Preact components
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
   ],
 },

};
