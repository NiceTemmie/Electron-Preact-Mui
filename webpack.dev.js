//Development webpack configuration file

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

//webpack-merge use webpack.common.js as a default pattern, only specify here thing needed for development
module.exports = merge(common, {

  mode: "development",
  devtool: 'inline-source-map',

  //Configuring watch (--watch in webpack launch options)
  //See: https://webpack.js.org/configuration/watch/
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 500,
    ignored: ["/node_modules/","electron.js"],
  },

});
