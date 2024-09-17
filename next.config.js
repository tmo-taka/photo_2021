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
        domains: ['images.microcms-assets.io'],
        //next/imagesのdeviceサイズを指定
    },
}

module.exports = nextConfig;