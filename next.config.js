/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["./public", process.env.IMG_DOMAIN],
  },
};

module.exports = nextConfig;
