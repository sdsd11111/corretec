/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Necesario para export estático si usas imágenes
  },
};

module.exports = nextConfig;
