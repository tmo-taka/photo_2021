import React, {FC} from 'react'
import HeaderList from '@component/atoms/list'
import styles from '@style/module/Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerIn}>
        <div>新しいポートフォリオテスト</div>
        <HeaderList/>
      </div>
    </header>
  )
}


export default Header;
