import React, {FC} from 'react'
import Link from 'next/link';
import styles from '@style/module/menu_common.module.scss'

const HeaderList: FC = () => {
  let lists = [
    {name: "Skill", path: '/dir/topic1', url:'topic1'},
    {name: "Works", path: 'path', url: 'url'},
    {name: "Profile", path: 'path', url: 'url'},
  ]
  return (
    <ul className={styles.menuList}>
        {
            lists.map((list) => {
                return (
                    <li className={styles.menuList__li}>
                      <Link href={list.path} as={list.url}>
                      {list.name}
                      </Link>
                    </li>
                );
            })
        }
    </ul>
  )
}



export default HeaderList;
