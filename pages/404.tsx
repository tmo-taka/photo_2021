import { FC } from 'react'
import { BaseLayout } from '@layout/BaseLayout';
import Head from 'next/head'
import Link from 'next/link'
import { css } from '@emotion/react'
import { mixinBtn } from '@style/common/mixin'
import {sp, pc} from '@style/common/mq'

const Home: FC = () => {
  return (
    <BaseLayout title={"エラーページ"}>
      <Head>
        <meta name="robots" content="noindex nofollow" />
      </Head>
      <div css={_error}>
        <h1 css={_title}>ページが見つかりませんでした。</h1>
        <div css={_btn}>
          <Link href="/">
            <a css={mixinBtn}>TOPへ戻る</a>
          </Link>
        </div>
      </div>
    </BaseLayout>
  )
}

const _error = () => css`
  ${sp`
      margin: 0 auto;
      padding: 30vw 0 ;
      width: 100%;
  `}
  ${pc`
      margin: 0 auto;
      padding: 64px 0;
      width: 800px;
  `}
`

const _title = () => css`
  ${sp`
      text-align: center;
      color: #000;
      font-size: 1.8rem;
  `}
  ${pc`
      text-align: center;
      color: #000;
      font-size: 2.0rem;
  `}
`

const _btn = () => css`
  ${sp`
      padding: 24vw 0 8vw;
      display: flex;
      justify-content: center;
  `}
  ${pc`
      padding: 104px 0 24px;
      display: flex;
      justify-content: center;
  `}
`

export default Home;
