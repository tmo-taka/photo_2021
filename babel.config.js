module.exports = {
    presets: [
        [
            'next/babel',
            {
                "preset-react": {
                    "runtime": "automatic",
                    "importSource": "@emotion/react"
                }
            }
        ],
    ],
    plugins: [
        // [
        //     "babel-plugin-styled-components",
        //     {
        //         "ssr":true,
        //     }
        // ],
        // "inline-react-svg",
        [
            "@emotion/babel-plugin",
            { "ssr": true }
        ]
    ],
}