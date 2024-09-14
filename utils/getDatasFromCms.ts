// APIからのフェッチ処理の共通化
// import { cache } from 'react'
import { client } from "@libs/client";

export const fetchWorks = async():Promise<ApiField.WorkType[]> => {
    const works: ApiField.Works = await client.get({
        endpoint: "cont",
    })
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