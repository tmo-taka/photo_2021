import React from 'react'
import Link from 'next/link';
import styles from '@style/module/menu_common.module.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  menuFlag ?: Boolean
}

const HeaderList = ({menuFlag}: Props) => {
  let lists = [
    {name: "Skill", to: "#skill"},
    {name: "Works", to: "#works"},
    {name: "Profile", to: "#profile"},
  ]
  return (
    <ul className={styles.menuList}>
        {
            lists.map((list) => {
                return (
                    <li className={`${styles.menuList__li} ${menuFlag ? styles.menuList__li__on : ""}`}  key={list.to}>
                      <AnchorLink href={list.to}>{list.name}</AnchorLink>
                    </li>
                );
            })
        }
    </ul>
  )
}



export default HeaderList;
