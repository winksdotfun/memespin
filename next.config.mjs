/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: '/wink/:path*',
                destination: '/',
                permanent: false,
            },
        ];
    },
    output: 'standalone',
    images: {
        domains: [
            // Add your image domains here if you're using next/image
        ],
    },
};

export default nextConfig;
