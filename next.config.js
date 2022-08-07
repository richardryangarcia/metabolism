/** @type {import('next').NextConfig} */
const withGraphql = require("next-graphql-loader");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["metabolism.mypinata.cloud"],
  },
};

module.exports = withGraphql(nextConfig);
