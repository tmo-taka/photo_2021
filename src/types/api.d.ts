declare module 'apiField' {
    type WorkType = {
        id: string,
        site_name: string,
        link_path: string,
        lead_img: object,
        service_img: string,
        service_txt: string,
        create_time: string,
        create_skill: string,
        create_span: string
    }

    type ToolType = {
        id: string,
        name: string
    }

    type ProgramingType = {
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