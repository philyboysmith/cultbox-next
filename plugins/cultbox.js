const cultboxConfig = require('../cultbox');

module.exports = (nextConfig = {}) =>
  Object.assign({}, nextConfig, {
    config: {
      ...cultboxConfig,
    },
  });
