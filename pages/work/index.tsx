import {FC} from 'react'
import Link from 'next/link'
import styles from '@style/module/work/top.module.scss'
import { BaseLayout } from '@layout/BaseLayout';
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
    <BaseLayout title="過去の実績一覧">
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
    </BaseLayout>
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
