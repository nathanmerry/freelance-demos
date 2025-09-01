/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages serves from a subdirectory, so we need to set the base path
  // Replace 'your-repo-name' with your actual repository name
  basePath: process.env.NODE_ENV === 'production' ? '/gaming-services-marketplace' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/gaming-services-marketplace/' : '',
}

module.exports = nextConfig
