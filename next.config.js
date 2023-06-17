/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['tailwindui.com', 'images.unsplash.com', 'eincode.com', 'thrangra.sirv.com']
  }
}

module.exports = nextConfig
