import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'front-portfolio',
    apiKey: process.env.NEXT_PUBLIC_API_KEY
})

// export const headerKey = {
//     headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY },
// }

// //export const works = `https://front-portfolio.microcms.io/api/v1/works" -H "X-MICROCMS-API-KEY: ${process.env.API_KEY}`

// export const worksAPI = "https://front-portfolio.microcms.io/api/v1/cont"

// export const toolsAPI = "https://front-portfolio.microcms.io/api/v1/tool"
