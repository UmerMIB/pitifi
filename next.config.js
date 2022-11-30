/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: "experimental-edge",
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
