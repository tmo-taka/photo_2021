declare module '*.svg';

//これによって肩が二重定義されていた...
// declare module "react" {
//     interface HTMLAttributes<T> extends DOMAttributes<T> {
//         css?: CSSProp;
//     }
// }