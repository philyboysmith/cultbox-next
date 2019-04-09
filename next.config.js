const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const images = require('next-images');
const cultbox = require('./plugins/cultbox');
/**
 * Config file for next.js
 */
module.exports = withPlugins([{ target: 'serverless' }, css, cultbox, images]);
