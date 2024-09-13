/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATOCMS_API_TOKEN: process.env.DATOCMS_API_TOKEN,
  },
};

export default nextConfig;
