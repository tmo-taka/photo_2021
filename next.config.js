/**
* @type {import('next').NextConfig}
*/

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        // appDir: true,
        // serverActionsを使用するための定義
        serverActions: {
            bodySizeLimit: '500kb'
        },
    },
    // cache容量
    cacheMaxMemorySize: 50 * 1024 * 1024, // 50M
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.microcms-assets.io'
            }
        ]
    },
}

module.exports = nextConfig;