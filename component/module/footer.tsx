import { ReactNode } from 'react'
import { css } from '@emotion/react'
import {sp, pc} from '@style/common/mq'

type Props = {
    children?: ReactNode,
}

export const Footer = (props:Props) => {
    return (
        <footer css={footer}>
            <div css={inFooter}>
                <div>Copyright © 2021 Apple Inc. All rights reserved.</div>
            </div>
        </footer>
    )
}

const footer = (theme) => css`
    ${sp`
        padding: 6% 0;
        width: 100%;
    `}
    ${pc`
        padding: 24px 0;
        border-top: solid 1px #CCC;
        width: 100%;
        min-width: ${theme.width.min};
    `}
`

const inFooter = () => css`
    ${sp`
        text-align: center;
        color: #000;
        font-size: 1.2rem;
    `}
    ${pc `
        text-align: center;
        font-size: 1.3rem;
    `}
`
