const cultboxConfig = require('../cultbox');

module.exports = (nextConfig = {}) =>
  Object.assign({}, nextConfig, {
    publicRuntimeConfig: {
      // our config for cultbox
      ...nextConfig.publicRuntimeConfig,
      ...cultboxConfig,
    },
  });
