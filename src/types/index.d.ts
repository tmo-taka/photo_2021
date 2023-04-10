// declare module '*.svg';
/// <reference types="next-plugin-svgr/types/svgFileLoader" />

declare module '*.svg' {
    import { FC, SVGProps } from 'react';
    export const ReactComponent: FC<SVGProps<SVGSVGElement>>;

    const src: string;
    export default src;
}