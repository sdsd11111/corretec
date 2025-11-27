/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Habilita las rutas de la API
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
