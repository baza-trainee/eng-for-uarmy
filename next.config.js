
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["drive.google.com", "upload.wikimedia.org", "babel.ua", "s.62.ua", "www.kyivpost.com", "www.voanews.com", "media.mssg.me", "cloudfront-us-east-1.images.arcpublishing.com", "shotam.info", "vechirniy.kyiv.ua"]
  },
};
const path = require('path');

module.exports = {
  ...nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
};