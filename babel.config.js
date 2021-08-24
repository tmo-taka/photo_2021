module.exports = {
    presets: ['next/babel'],
    plugins: [
        [
            'module-resolver',
            {
                "root": ["./"],
                /*"alias": {
                    "@svg": './public/img/svg',
                },*/
            },
        ],
        //"inline-react-svg",
    ]
}