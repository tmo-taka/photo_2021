import React, {FC} from 'react'
import { useRouter } from 'next/router';
import styles from '@style/module/top.module.scss'


const Topic_1: FC = () => {
    const router = useRouter();

    return (
    <div id="wrapper">
        <h1 className={styles.title}>{router.query.id}</h1>
    </div>
    )
}

export default Topic_1;
