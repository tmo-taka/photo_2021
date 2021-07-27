import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'front-portfolio',
    apiKey: process.env.API_KEY,
});