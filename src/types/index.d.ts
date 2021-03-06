declare module '*.svg';

declare module "react" {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        css?: CSSProp;
    }
}