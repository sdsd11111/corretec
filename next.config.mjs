/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Output 'export' makes Next generate a static export compatible with cPanel
  // Note: this requires that all pages are exportable (no server-only APIs or dynamic fetches)
  output: 'export', // This line is already present, so we will not change it
  images: {
    unoptimized: true,
  },
}

export default nextConfig; // This line is already present, so we will not change it
