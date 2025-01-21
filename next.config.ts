const nextConfig = {
  swcMinify: true,
  distDir: 'build',
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['cdn.sanity.io', 'plus.unsplash.com', 'images.unsplash.com', 'next-ecommerce-template-4.vercel.app'],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 128, 256],
  },
};

export default nextConfig;

