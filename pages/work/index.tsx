import React, {FC} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '@component/module/header'
import styles from '@style/module/top.module.scss'

const Home: FC = () => {
  return (
    <div id="wrapper">
      <Header />
      <h1 className={styles.title}>これです</h1>
    </div>
  )
}

export default Home;
