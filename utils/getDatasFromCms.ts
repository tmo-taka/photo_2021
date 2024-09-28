// APIからのフェッチ処理の共通化
// import { cache } from 'react'
import { client } from "@libs/client";

export const fetchSingleWork = async(slug: ApiField.WorkType['slug']):Promise<ApiField.WorkType> => {
    const works: ApiField.Works = await client.get({
            endpoint: "cont",
            queries: {
                filters: `slug[equals]${slug}`
            },
        },
    )
    if(!works.contents.length) {throw Error('みつかりませでした。')}
    const workData: ApiField.WorksType = works.contents[0];
    return workData;
}

export const fetchWorks = async(limit:number = 10):Promise<ApiField.WorkType[]> => {
    const works: ApiField.Works = await client.get({
            endpoint: "cont",
            queries: { limit },
        },
    )
    return works.contents;
}

export const fetchTools = async():Promise<ApiField.ToolType[]> => {
    const tools: ApiField.Tools = await client.get({
        endpoint: 'tool',
    })

    return tools.contents;
}

export const fetchProgrammings = async():Promise<ApiField.ProgrammingType[]> => {
    const programmings: ApiField.Programmings = await client.get({
        endpoint: 'programing',
    })
    return programmings.contents
}