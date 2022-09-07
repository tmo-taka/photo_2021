import React, {FC} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@style/module/work/top.module.scss'
import { Header} from '@component/organisms/Header'
import { Footer } from '@component/module/Footer'
import { SpMenu } from '@component/organisms/SpMenu'
import { motion } from "framer-motion";
import { dehydrate, QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query';
import { fetchWorks } from "../api/getData"
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import * as apiField from 'apiField';

const queryClient = new QueryClient()

const Work: FC = ({ work }: InferGetStaticPropsType<typeof getStaticProps>) => {

  type useQueryWrapper<T> = {
    data: T
  }

  const works:useQueryWrapper<apiField.WorkType[]> = useQuery(['works'],fetchWorks,{cacheTime: Infinity});

  return (
    <QueryClientProvider client={queryClient}>
      <div id="wrapper">
        <Head>
          <title>【takaharaポートフォリオ】過去の実績一覧</title>
          <meta property="og:title" content="【takaharaポートフォリオ】過去の実績一覧" key="title" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;500&family=Montserrat:wght@100;200;400;500&display=swap" rel="stylesheet" />
        </Head>

        <Header />

        <div className={styles.listBox}>
          <h1 className={styles.listBox__title}>Works</h1>
          <ul className={styles.listBox__content}>
          {
            works.data.map((list,index) => {
              const path = `/work/${list.slug}/`
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.08 * (index + 1)}}
                  className={styles.listWrapper}
                  key={list.id}
                  >
                <li className={styles.list}>
                  <Link href={path}  as={path}>
                      <div className={styles.listIn}>
                        <div className={styles.listIn__img}>
                          <img src={list.lead_img.url}/>
                        </div>
                        <div className={styles.listIn__txt}>{list.site_name}</div>
                      </div>
                  </Link>
                </li>
                <SpMenu />
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
    </QueryClientProvider>
  )
}

export default Work;


export const getStaticProps:GetStaticProps = async () => {
  await queryClient.prefetchQuery(['works'], fetchWorks);
  const queryData= dehydrate(queryClient);

  return {
    props: {
      queryData,
    }
  }
}
