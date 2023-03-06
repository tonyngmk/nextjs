/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org"]
    // protocol: "https",
    // hostname: "image.tmdb.org",
    // port: '',
    // pathname: ''
  }
}

module.exports = nextConfig
