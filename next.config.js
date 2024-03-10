const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    domains: ["shopping-phinf.pstatic.net"],
    formats: ["image/avif", "image/webp"],
  },
}

module.exports = withBundleAnalyzer(nextConfig)

// module.exports = nextConfig
