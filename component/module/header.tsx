import React from 'react'
import HeaderList from '@component/atoms/list'
import styles from '@style/module/header.module.scss'

const Header = () => {
  return (
      <header className={styles.header}>
        <div className={styles.headerIn}>
          <div className={styles.headerIn_title}>takahara's portfolio</div>
          <HeaderList/>
        </div>
      </header>
    )
}


export default Header;
