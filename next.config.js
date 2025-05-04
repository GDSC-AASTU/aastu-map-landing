/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: ['placehold.co', 'via.placeholder.com'],
  },
  trailingSlash: false,
};

module.exports = nextConfig; 