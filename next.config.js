/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                "hostname": "cdn.marcthedev.it",
                "protocol": "https"
            },
            {
                "hostname": "assets-global.website-files.com",
                "protocol": "https"
            }
        ],
    }
}
module.exports = nextConfig
