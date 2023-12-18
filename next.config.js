/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other Next.js configuration options go here

  // Add the exportPathMap configuration
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      // Add other pages as needed
    };
  },
};

module.exports = nextConfig;
