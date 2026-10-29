/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/mohsinQEManagerWebsite" : "";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;


