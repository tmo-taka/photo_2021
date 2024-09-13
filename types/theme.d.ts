import '@emotion/react'

declare module '@emotion/react' {
    interface Theme {
        colors: Colors
        width: Width
    }
}

interface Colors {
    primary: string,
    accent: string
}

interface Width {
    min: string,
    max: string
}