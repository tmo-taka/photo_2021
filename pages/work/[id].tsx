import React, {FC} from 'react/index'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@style/module/work/topic.module.scss'
import Footer from '@component/module/footer'
import { motion } from "framer-motion";
import { fetchWorks } from "../api/getData"
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, QueryClientProvider, useQuery} from 'react-query';
import { GetStaticPaths, GetStaticProps, InferGetServerSidePropsType, GetStaticPropsContext } from 'next';
import * as apiField from 'apiField';

const queryClient = new QueryClient()

const Work_Topic: FC = ({ work }: InferGetServerSidePropsType<typeof getStaticProps>) => {

    type useQueryWrapper<T> = {
        data: T
    }

    const works:useQueryWrapper<apiField.WorkType[]> = useQuery(['works'],fetchWorks,{staleTime: Infinity});
    const router = useRouter();
    const targetWork:apiField.WorkType = works.data.find((work) => {
        const path = `/work/${work.slug}/`
        return path === router.asPath
    })

    const transition = {
        duration: .4,
        ease: "easeOut",
    };

    const variants= {
        hidden: {
            opacity: 0,
            translateY: 20,
        },
        visible: {
            opacity: 1,
            translateY: 0,
        },
    };

    return (
        <QueryClientProvider client={queryClient}>
            <div id="wrapper">
                <Head>
                    <title>【takaharaポートフォリオ】{targetWork.site_name} </title>
                    <meta property="og:title" content={`【takaharaポートフォリオ】` + targetWork.site_name} key="title" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;500&family=Montserrat:wght@100;200;400;500&display=swap" rel="stylesheet" />
                </Head>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={transition}
                    variants={variants}
                >
                <h1 className={styles.title}>{targetWork.site_name}</h1>
                <div className={styles.imgBox}>
                    <div className={styles.imgBoxIn}>
                        <img src={targetWork.lead_img.url} />
                    </div>
                </div>

                {((targetWork) => {
                    if(targetWork.create_time){
                        {
                            return(
                                <div className={styles.detailBox}>
                                    <div className={styles.detailBoxIn}>
                                        <dl className={styles.detailBoxIn__lists}>
                                            <dt>作成時期</dt><dd>{targetWork.create_time}</dd>
                                            <dt>スキル</dt><dd>{targetWork.create_skill}</dd>
                                            <dt>作成期間</dt><dd>{targetWork.create_span}</dd>
                                        </dl>
                                    </div>
                                </div>
                            )
                        }
                    }
                })(targetWork)}

                {((targetWork) => {
                    if(targetWork.service_txt){
                        {
                            return(
                                <div className={styles.contentBox}>
                                    <p className={styles.contentBox__txt}>{targetWork.service_txt}</p>
                                </div>
                            )
                        }
                    }
                })(targetWork)}

                <div className={styles.backBtn}>
                    <Link href="/work/">
                        <a>一覧へ戻る</a>
                    </Link>
                </div>

                <Footer />
                </motion.div>
            </div>
        </QueryClientProvider>
    )
}

export default Work_Topic;

export const getStaticPaths:GetStaticPaths = async () => {
    const works = await fetchWorks();

    // const paths = ['/work/1','/work/2','/work/3'];

    const paths = works.map(workList => `/work/${workList.slug}/`)

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps:GetStaticProps = async () => {
    await queryClient.prefetchQuery('works', fetchWorks);

    const queryData= dehydrate(queryClient);

    return {
        props: {
        queryData,
        }
    }
}
