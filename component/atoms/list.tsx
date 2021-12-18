import React from 'react'
import Link from 'next/link';
import styles from '@style/module/menu_common.module.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HeaderList = () => {
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
                    <li className={styles.menuList__li} key={list.to}>
                      <AnchorLink href={list.to}>
                      {list.name}
                      </AnchorLink>
                    </li>
                );
            })
        }
    </ul>
  )
}



export default HeaderList;
