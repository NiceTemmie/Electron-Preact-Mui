//Production webpack configuration file

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

//webpack-merge use webpack.common.js as a default pattern, only specify here thing needed for production
module.exports = merge(common, {
  mode: 'production',
});
