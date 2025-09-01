import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages configuration
  // Replace 'gaming-services-marketplace' with your actual repository name if different
  basePath: process.env.NODE_ENV === 'production' ? '/gaming-services-marketplace' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/gaming-services-marketplace/' : '',
};

export default nextConfig;
