import {FC} from 'react'
import { Header } from '@component/module/Header'
import styles from '@style/module/top.module.scss'

const Topic_1: FC = () => {
  return (
    <div id="wrapper">
      <Header />
      <h1 className={styles.title}>これも俺のポートフォリオ</h1>
    </div>
  )
}

export default Topic_1;
