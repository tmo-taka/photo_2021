import { ReactNode } from 'react'
import { useState } from 'react'
import MenuList from '@component/atoms/list'
import styles from '@style/module/menu_sp.module.scss'
import { css, SerializedStyles } from '@emotion/react'

type Props = {
    children?: ReactNode,
    displayFlag ?: Boolean
}

type Border = {
    position: "top" | "cen" | "bot",
    active: SerializedStyles
}

const Menu = (props:Props) => {

    const [menuFlag,setMenuFlag] = useState<boolean>(false)

    const border:Border[] = [
        {position: "top", active: style.border.active.top},
        {position: "cen", active: style.border.active.cen},
        {position: "bot", active: style.border.active.bot},
    ]

    const menuControl = () => setMenuFlag(!menuFlag);

    return (
        <div>
            <div className={`${styles.menu} ${props.displayFlag ? "" : styles.on}`} onClick={() =>menuControl()}>
                <div className={`${styles.menu__icon} ${menuFlag ? styles.on : ""}`}>
                    <div className={styles.menu__icon__border}>
                        {
                            border.map((data:Border) => {
                                return <span key={data.position} css={[style.border.base, menuFlag ? data.active :  ""]}></span>
                            })
                        }
                    </div>
                </div>
                <nav className={`${styles.menu__nav} ${menuFlag ? styles.on : ""}`}>
                    <MenuList menuFlag={menuFlag}/>
                </nav>
            </div>
            <div className={`${styles.circle} ${menuFlag ? styles.on : ""}`}>
            </div>
        </div>
    );
}

export default Menu;


const style = {
    border: {
        base: css`
            margin: 0 auto .22em;
            display: block;
            width: 1.8em;
            height: .2em;
            background-color: #FFF;
            transition: .2s ease-in;
        `,
        top: css`
            transform-origin: top left;
            transform: translate(.4em,0) rotate(45deg);
            width: 2.2em;
        `,
        cen: css`
            opacity: 0;
        `,
        bot: css`
            transform-origin: bottom left;
            transform: translate(.4em,.5em) rotate(-45deg);
            width: 2.2em;
        `,
        active: {
            top: css`
                transform-origin: top left;
                transform: translate(.4em,0) rotate(45deg);
                width: 2.2em;
            `,
            cen: css`
                opacity: 0;
            `,
            bot: css`
                transform-origin: bottom left;
                transform: translate(.4em,.5em) rotate(-45deg);
                width: 2.2em;
            `
        }
    }
}
