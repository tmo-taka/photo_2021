import { ReactNode } from 'react'
import { css, Theme } from '@emotion/react'
import {sp, pc} from '@style/common/mq'

type Props = {
    children?: ReactNode,
}

export const Footer = (props:Props) => {
    return (
        <footer css={_footer}>
            <div css={_inFooter}>
                <div>Copyright © 2021 Apple Inc. All rights reserved.</div>
            </div>
        </footer>
    )
}

const _footer = (theme:Theme) => css`
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

const _inFooter = () => css`
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
