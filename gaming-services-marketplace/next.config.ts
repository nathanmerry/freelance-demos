import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages configuration for subdirectory deployment
  // Configured for https://nathanmerry.github.io/freelance-demos/gaming-services-marketplace
  basePath: process.env.NODE_ENV === 'production' ? '/freelance-demos/gaming-services-marketplace/out' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/freelance-demos/gaming-services-marketplace/out/' : '',
};

export default nextConfig;
