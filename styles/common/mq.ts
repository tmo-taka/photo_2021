/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const sp = (first,...interpolations) => {
    return css`
        @media screen and (min-width: 0px) and (max-width: 750px) {
            ${css(first, ...interpolations)}
        }
    `
}

export const pc = (first, ...interpolations) => {
    return css`
        @media screen and (min-width: 751px) {
            ${css(first, ...interpolations)}
        }
    `
}