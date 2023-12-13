const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    domains: ["upload.wikimedia.org", "babel.ua", "s.62.ua", "www.kyivpost.com", "www.voanews.com", "media.mssg.me", "cloudfront-us-east-1.images.arcpublishing.com", "shotam.info", "vechirniy.kyiv.ua"]
  },
};

module.exports = {
  ...nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
};