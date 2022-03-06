const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
  ...defaultConfig,
  entry: {
    ...defaultConfig.entry,
    editorStyle: './src/editorStyle.js',
    frontStyle: './src/frontStyle.js',
  },
};
