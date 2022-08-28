import { ReactNode } from 'react'
import { css } from '@emotion/react'
import {sp, pc} from '@style/common/mq'
import HeaderList from '@component/atoms/list'

type Props = {
  children?: ReactNode,
}

export const Header = (props:Props) => {
  return (
      <header css={header}>
        <div css={inHeader}>
          <div css={title}>takahara's portfolio</div>
          <HeaderList/>
        </div>
      </header>
    )
}

const header= (theme) => css`
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

const inHeader = () => css`
    ${pc `
        margin: 0 auto;
        display: flex;
        width: 100%;
        justify-content: space-around;
        width: 100%;
        font-size: 2.4rem;
    `}
`

const title = () => css`
    ${pc `
        font-size: 2.6rem;
        letter-spacing: .04em;
    `}
`
