import React, {FC} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@style/module/work/top.module.scss'
import { motion } from "framer-motion";
import { client } from "../api/client";
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const Work: FC = ({ work }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const workList = [
    {name: "ズバット引越し手続き", path: '/work/1', imgPath: "/img/work/work_1.png"},
    {name: "ズバット引越し比較", path: '/work/2', imgPath: "/img/work/work_2.png"},
    {name: "デジタラボ", path: '/work/3', imgPath: "/img/work/work_3.png"}
  ]

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

      <div className={styles.listBox}>
        <h1 className={styles.listBox__title}>Works</h1>
        <ul className={styles.listBox__content}>
        {
          workList.map((list,index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.08 * (index + 1)}}
                >
              <li className={styles.list}>
                <Link href="/work/[id]" as={list.path}>
                    <div>
                      <Image src={list.imgPath} layout={'responsive'} width={320} height={180}/>
                      <div className={styles.list__txt}>{list.name}</div>
                    </div>
                </Link>
              </li>
              </motion.div>
            );
          })
        }
        </ul>
      </div>
    </div>
  )
}

export default Work;

type Work = {
  site_name: string,
  link_path: string,
  lead_img: string,
  service_img: string,
  service_txt: string,
  create_time: string,
  create_skill: string,
  create_span: string
}

export const getStaticProps:GetStaticProps = async () => {
  const work:Work[] = await client.get({ endpoint: "cont" });
  console.log(work);
  return {
    props: {
      work,
    }
  }
}
