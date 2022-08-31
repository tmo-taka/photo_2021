import React from 'react'
import {FC} from 'react/cjs/react.production.min'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@component/organisms/Header'
import { Footer } from '@component/module/Footer'
import styles from '@style/module/error.module.scss'

const Home: FC = () => {
  return (
    <div id="wrapper">
      <Head>
        <title>【takaharaポートフォリオ】エラーページ</title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;500&family=Montserrat:wght@100;200;400;500&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <div className={styles.error}>
        <h1 className={styles.error_title}>ページが見つかりませんでした。</h1>
        <div className={styles.error_btn}>
          <Link href="/">
            <a>TOPへ戻る</a>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;
