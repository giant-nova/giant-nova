/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = '/giant-nova'; // <--- Update this if your repo name changes

const nextConfig = {
  output: 'export',
  // Only add the basePath if we are deploying to GitHub (production)
  basePath: isProd ? repoName : '', 
  images: {
    unoptimized: true,
  },
  // This makes the variable available in your React components
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoName : '',
  },
};

export default nextConfig;