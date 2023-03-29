// APIからのフェッチ処理の共通化

import * as apiField from 'apiField';
import { client } from "./client";

export const fetchWorks = async() => {
    const works: apiField.Works = await client.get({
        endpoint: "cont",
    })
    return works.contents;
}

export const fetchTools = async() => {
    const tools: apiField.Tools = await client.get({
        endpoint: 'tool',
    })

    return tools.contents;
}

export const fetchProgramings = async() => {
    const programings: apiField.Programings = await client.get({
        endpoint: 'programing',
    })

    return programings.contents
}