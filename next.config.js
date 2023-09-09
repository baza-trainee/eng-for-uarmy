
/** @type {import('next').NextConfig} */
const nextConfig = {};
const path = require('path');

module.exports = {
  ...nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};