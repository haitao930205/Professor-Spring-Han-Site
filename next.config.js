const repo = 'spring-han-site';

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    loader: 'akamai',
    path: `/${repo}/`,
    unoptimized: true,
  },
};
