/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Image optimization is on: Next.js resizes each image to the size it is
    // displayed at and serves AVIF/WebP, so phones don't download full-size files.
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
