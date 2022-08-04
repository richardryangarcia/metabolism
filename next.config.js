/** @type {import('next').NextConfig} */
const withGraphql = require("next-graphql-loader");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withGraphql(nextConfig);
