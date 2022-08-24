import React from 'react'
import Link from 'next/link';
import styles from '@style/module/menu_common.module.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useRouter } from 'next/router';

type Props = {
  menuFlag ?: Boolean
}

const listsTag = (topFlag:Boolean, list) => {
  let linkTag;
  if(topFlag){
    linkTag = () => (
        <AnchorLink href={list.to}>{list.name}</AnchorLink>
    )
  }else {
    linkTag = () => (
        <Link href='/'>{list.name}</Link>
    )
  }
  return (linkTag())
}

const HeaderList = ({menuFlag}: Props) => {
  let topFlag = false;
  if(useRouter().pathname == '/'){
    topFlag = true;
  } ;
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
                      {listsTag(topFlag,list)}
                    </li>
                );
            })
        }
    </ul>
  )
}

export default HeaderList;
