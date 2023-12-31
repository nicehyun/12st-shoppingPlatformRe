/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    domains: ["shopping-phinf.pstatic.net"],
    formats: ["image/avif", "image/webp"],
  },
}

module.exports = nextConfig
