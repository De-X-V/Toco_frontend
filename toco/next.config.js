/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "ipfs.infura.io",
      "localhost",
      "*",
      "ca-times.brightspotcdn.com",
      "static.nike.com",
      "images.unsplash.com",
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
