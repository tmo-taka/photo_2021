import React from 'react'
import HeaderList from '@component/atoms/list'
import styles from '@style/module/footer.module.scss'

const Header = () => {
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
