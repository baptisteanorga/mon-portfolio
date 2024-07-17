const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      'style': path.resolve(__dirname, 'src/style'),
      'components': path.resolve(__dirname, 'src/components')
    },
  };

  return config;
};