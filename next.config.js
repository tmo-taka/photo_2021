const withOptimizedImages = require('next-optimized-images');
//const withTM = require('next-transpile-modules')(['imagemin-svgo']);

module.exports = {

    experimental: {
        optimizeFonts: true,
    },
    exportPathMap: async function() {
        const paths = {
            '/': { page: '/' },
            '/work/': { page: '/work' },
        };
        const res = await fetch('https://front-portfolio.microcms.io/api/v1/');
        const data = await res.json();
        const cont = data.map(entry => entry.cont);

        cont.forEach(cont=> {
            paths[`/work/${cont.id}`] = { page: '/cont/[id]', query: { id: cont.id } };
        });

        return paths;
    },
    images: {
        domains: ['images.microcms-assets.io'],
    },

    target: "serverless",

    future: {
        webpack5: true,
    },
}

//画像圧縮
const optimizedImages = withOptimizedImages({
    reactStrictMode: true,
    trailingSlash: true,
    handleImages: ['svg','png'],
})

module.exports = optimizedImages;