// NOTE: microCMSのSDK設定

import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'front-portfolio',
    apiKey: 'api-key',
});