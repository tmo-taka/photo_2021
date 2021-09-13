import React, {FC} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@style/module/work/top.module.scss'
import Footer from '@component/module/footer'
import { motion } from "framer-motion";
import { client } from "../api/client";
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const Work: FC = ({ work }: InferGetStaticPropsType<typeof getStaticProps>) => {

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
          work.contents.map((list,index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.08 * (index + 1)}}
                className={styles.listWrapper}
                >
              <li className={styles.list} key={list.id}>
                <Link href={list.link_path}  as={list.link_path}>
                    <div className={styles.listIn}>
                      <Image src={list.lead_img.url} layout={'responsive'} width={320} height={180}/>
                      <div className={styles.listIn__txt}>{list.site_name}</div>
                    </div>
                </Link>
              </li>
              </motion.div>
            );
          })
        }
        </ul>
      </div>
      <div className={styles.backBtn}>
          <Link href="/">
              <a>TOPへ戻る</a>
          </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Work;

type WorkType = {
  id: string,
  site_name: string,
  link_path: string,
  lead_img: object,
  service_img: string,
  service_txt: string,
  create_time: string,
  create_skill: string,
  create_span: string
}

export const getStaticProps:GetStaticProps = async () => {
  const work:WorkType[] = await client.get({ endpoint: "cont" });
  return {
    props: {
      work,
    }
  }
}
