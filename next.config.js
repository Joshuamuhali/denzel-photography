/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // Add your production domain here
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  // Enable React Strict Mode (recommended)
  reactStrictMode: true,
  // Enable production browser source maps
  productionBrowserSourceMaps: false,
  // Enable compression
  compress: true,
  // Other optimizations
  poweredByHeader: false,
};

module.exports = nextConfig;
