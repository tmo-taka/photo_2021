// HACK: 現在では、moduleキーワードは非推奨となっているため、namespaceキーワードの使用をするようにしてください。

namespace ApiField {
    export type WorkType = {
        id: string,
        site_name: string,
        slug: string,
        lead_img: {
            url: string,
            width: number,
            height: number,
        },
        service_img: string,
        service_txt: string,
        create_time: string,
        create_skill: string,
        create_span: string
    }

    export type ToolType = {
        id: string,
        name: string
    }

    export type ProgrammingType = {
        id: string,
        name: string
    }

    export interface Works {
        contents: WorkType[]
    }

    export interface Tools {
        contents: ToolsType[]
    }

    export interface Programmings {
        contents: ProgrammingType[]
    }
}