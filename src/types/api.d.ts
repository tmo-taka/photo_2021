declare module 'apiField' {
    export type WorkType = {
        id: string,
        site_name: string,
        link_path: string,
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

    export type ProgramingType = {
        id: string,
        name: string
    }

    export interface Works {
        contents: WorkType[]
    }

    export interface Tools {
        contents: ToolsType[]
    }

    export interface Programings {
        contents: ToolsType[]
    }
}