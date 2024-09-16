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

// module.exports = {
//     experimental: {
//     },
//     exportPathMap: async function() {
//         const paths = {
//             '/': { page: '/' },
//             '/work/': { page: '/work' },
//         };
//         const res = await fetch('https://front-portfolio.microcms.io/api/v1/');
//         const data = await res.json();
//         const cont = data.map(entry => entry.cont);

//         cont.forEach(cont=> {
//             paths[`/work/${cont.id}`] = { page: '/cont/[id]', query: { id: cont.id } };
//         });

//         return paths;
//     },
//     sassOptions: {
//         prependData: `@import "@style/common/variable.scss";`
//     },
//     images: {
//         domains: ['images.microcms-assets.io'],
//         //next/imagesのdeviceサイズを指定
//     },

//     target: "serverless",

//     future: {webpack5: true,},

//     // cache容量
//     cacheMaxMemorySize: 50 * 1024 * 1024 // 50M
// }

// const nextConfig = {
    
// }

// 画像圧縮
// const optimizedImages = withOptimizedImages({
//     reactStrictMode: true,
//     trailingSlash: true,
//     handleImages: ['svg','png'],
// })

module.exports = nextConfig;
// module.exports = optimizedImages;