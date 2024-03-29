import { ReactNode } from 'react'
import Link from 'next/link';
import { css, Theme } from '@emotion/react'
import {sp, pc} from '@style/common/mq'
import { Nav } from '@component/module/Nav'

type Props = {
  children?: ReactNode,
}

export const Header = (props:Props) => {
  return (
      <header css={_header}>
        <div css={_inHeader}>
          <Link href="/" passHref>
            <a css={_title}>takahara's portfolio</a>
          </Link>
          <Nav/>
        </div>
      </header>
    )
}

const _header= (theme:Theme) => css`
    ${sp`
        display: none;
    `}
    ${pc`
        margin: 0 auto;
        border-bottom: solid 1px #CCC;
        padding: 24px 30px;
        width: 100%;
        min-width: ${theme.width.min};
    `}
`

const _inHeader = () => css`
    margin: 0 auto;
    display: flex;
    width: 100%;
    justify-content: space-around;
    width: 100%;
    font-size: 2.4rem;
`

const _title = () => css`
    font-size: 2.6rem;
    letter-spacing: .04em;
    color: #000;
    text-decoration: none;
`
