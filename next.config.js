/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    path: process.env.NEXT_PUBLIC_BASE_PATH + '/_next/image',
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
