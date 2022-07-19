/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["api-maps.yandex.ru"],
  },
};

module.exports = nextConfig;
