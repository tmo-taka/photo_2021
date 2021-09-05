import React, {useState} from 'react'
import MenuList from '@component/atoms/list'
import styles from '@style/module/menu_sp.module.scss'

const Menu = () => {

    const [menuFlag,setMenuFlag] = useState<boolean>(false)

    const menuControl = function() {
        setMenuFlag(!menuFlag);
    }

    return (
        <div>
            <div className={styles.menu} onClick={menuControl}>
                <div className={`${styles.menu__icon} ${menuFlag ? styles.on : ""}`}>
                    <div className={styles.menu__icon__border}>
                        <span className={styles.menu__icon__border__top}></span>
                        <span className={styles.menu__icon__border__cen}></span>
                        <span className={styles.menu__icon__border__bot}></span>
                    </div>
                </div>
                <nav className={`${styles.menu__nav} ${menuFlag ? styles.on : ""}`}>
                    <MenuList />
                </nav>
            </div>
            <div className={`${styles.circle} ${menuFlag ? styles.on : ""}`}>
            </div>
        </div>
    );
}


export default Menu;
