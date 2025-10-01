/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: "/outstride-website",
  basePath: "/outstride-website",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

