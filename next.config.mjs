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
};

export default nextConfig;
