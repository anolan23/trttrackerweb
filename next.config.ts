import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/trttrackerweb' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
