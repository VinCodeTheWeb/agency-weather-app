/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'http', hostname: 'openweathermap.org', port: '' },
    ],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    return config
  },
}
