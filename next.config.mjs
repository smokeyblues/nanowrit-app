/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'aceternity.com',
          port: '',
          pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            port: '',
            pathname: '/**',
        }
      ],
    },
};

export default nextConfig;
