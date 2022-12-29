import { ReactNode } from 'react'
import { css, Theme } from '@emotion/react'
import {sp, pc} from '@style/common/mq'
import { Git } from '@img/ico/Git'
import { Zenn } from '@img/ico/Zenn'
import { Qiita } from '@img/ico/Qiita'

type Props = {
    children?: ReactNode,
}

export const Footer = (props:Props) => {
    return (
        <footer css={_footer}>
            <div css={_inFooter}>
                <div css={_inFooter_accounts}>
                    <a href="https://github.com/tmo-taka" target="_blank" css={_inFooter_accounts_link} >
                        <Git />
                    </a>
                    <a href="https://qiita.com/wc-takahara" target="_blank" css={_inFooter_accounts_link} >
                        <Qiita />
                    </a>
                    <a href="https://zenn.dev/tmo_taka" target="_blank" css={_inFooter_accounts_link} >
                        <Zenn />
                    </a>
                </div>
                <small>Copyright © 2021 Apple Inc. All rights reserved.</small>
            </div>
        </footer>
    )
}

const _footer = (theme:Theme) => css`
    ${sp`
        padding-bottom: 6%;
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

const _inFooter_accounts = () => css`
    ${sp`
        margin: 0 auto 4.8vw;
        width: 36vw;
        display :flex;
        justify-content: space-between;
    `}
    ${pc `
        margin: 0 auto 24px;
        width: 160px;
        display :flex;
        justify-content: space-between;
    `}
`

const _inFooter_accounts_link = () => css`
    ${sp`
        display: inline-block;
        width: 8.8vw;
        height: auto;
    `}
    ${pc `
        display: inline-block;
        width: 36px;
        height: auto;
        &:hover {
            opacity: .7
        }
    `}
`
