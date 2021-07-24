import React, {FC} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import styles from '@style/module/top.module.scss'
import { motion } from "framer-motion";

const Work_Topic: FC = () => {
    const router = useRouter();

    const workList = [
        {name: "ズバット引越し手続き", path: '/work/1', imgPath: "/img/work/work_1.png"},
        {name: "ズバット引越し比較", path: '/work/2', imgPath: "/img/work/work_2.png"},
        {name: "デジタラボ", path: '/work/3', imgPath: "/img/work/work_3.png"}
    ]

    const selectList = workList[Number(router.query.id) - 1];

    return (
    <div id="wrapper">
        <Head>
            <title>これがポートフォリオです</title>
            <meta property="og:title" content="My page title" key="title" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;500&family=Montserrat:wght@100;200;400;500&display=swap" rel="stylesheet" />
        </Head>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1}}
        >
        <h1 className={styles.title}>{selectList.name}</h1>
        <div className={styles.imgBox}>
            <Image src={selectList.imgPath} layout={'responsive'} width={320} height={180}/>
        </div>
        <div className={styles.detailBox}>
            <dl className={styles.detailBox__lists}>
                <dt>作成時期</dt><dd>社会人3年目</dd>
                <dt>スキル</dt><dd>HTML/CSS/jQuey</dd>
                <dt>作成期間</dt><dd>20営業日</dd>
            </dl>
        </div>
        <div className={styles.contentBox}>
            <p className={styles.contentBox__txt}>テスト</p>
        </div>
        </motion.div>
    </div>
    )
}

export default Work_Topic;
