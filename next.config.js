/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/company', destination: '/about', permanent: true },
      { source: '/packaging-testing', destination: 'https://boulderpackagetest.com/', permanent: true },
      { source: '/distribution-testing', destination: 'https://boulderpackagetest.com/', permanent: true },
      { source: '/astm-d4169', destination: 'https://boulderpackagetest.com/tests/astm-d4169', permanent: true },
      { source: '/ista-3a', destination: 'https://boulderpackagetest.com/tests/ista-3a', permanent: true },
    ];
  },
};

module.exports = nextConfig;
