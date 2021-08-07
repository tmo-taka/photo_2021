import React, {FC} from 'react'
import styles from '@style/module/footer.module.scss'

const Header: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerIn}>
                <div>Copyright © 2021 Apple Inc. All rights reserved.</div>
            </div>
        </footer>
    )
}


export default Header;
