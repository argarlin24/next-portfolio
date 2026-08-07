/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATOCMS_API_TOKEN: process.env.DATOCMS_API_TOKEN,
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
