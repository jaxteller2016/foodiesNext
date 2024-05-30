/** @type {import('next').NextConfig} */
// const nextConfig = {}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sorin-nextjs-demo-meals-image.s3.amazonaws.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

module.exports = nextConfig;
