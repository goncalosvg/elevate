/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['gsap'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'instasize.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
