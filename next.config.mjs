/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the whole site builds to a plain /out directory that
  // GitHub Pages can serve.
  output: 'export',
  // The site is served at https://artpinkkan.github.io/microsite — every
  // asset and link needs the /microsite prefix.
  basePath: '/microsite',
  assetPrefix: '/microsite/',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
