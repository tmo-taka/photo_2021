import React, {FC} from 'react/index'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@style/module/work/topic.module.scss'
import Footer from '@component/module/footer'
import { motion } from "framer-motion";
import { client } from "../api/client";
import { GetStaticPaths, GetStaticProps, InferGetServerSidePropsType, GetStaticPropsContext } from 'next';

const Work_Topic: FC = ({ work }: InferGetServerSidePropsType<typeof getStaticProps>) => {

    const data =  work.contents[0];

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
    <div id="wrapper">
        <Head>
            <title>【takaharaポートフォリオ】{data.site_name} </title>
            <meta property="og:title" content={`【takaharaポートフォリオ】` + data.site_name} key="title" />
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
        <h1 className={styles.title}>{data.site_name}</h1>
        <div className={styles.imgBox}>
            <div className={styles.imgBoxIn}>
                <img src={data.lead_img.url} />
            </div>
        </div>

        {((data) => {
            if(data.create_time){
                {
                    return(
                        <div className={styles.detailBox}>
                            <div className={styles.detailBoxIn}>
                                <dl className={styles.detailBoxIn__lists}>
                                    <dt>作成時期</dt><dd>{data.create_time}</dd>
                                    <dt>スキル</dt><dd>{data.create_skill}</dd>
                                    <dt>作成期間</dt><dd>{data.create_span}</dd>
                                </dl>
                            </div>
                        </div>
                    )
                }
            }
        })(data)}

        {((data) => {
            if(data.service_txt){
                {
                    return(
                        <div className={styles.contentBox}>
                            <p className={styles.contentBox__txt}>{data.service_txt}</p>
                        </div>
                    )
                }
            }
        })(data)}

        <div className={styles.backBtn}>
            <Link href="/work/">
                <a>一覧へ戻る</a>
            </Link>
        </div>

        <Footer />
        </motion.div>
    </div>
    )
}

export default Work_Topic;

type WorkType = {
    contents: [
        {
            id: string,
            site_name: string,
            link_path: string,
            lead_img: object,
            service_img: string,
            service_txt: string,
            create_time: string,
            create_skill: string,
            create_span: string,
        }
    ]
}

export const getStaticPaths:GetStaticPaths = async () => {
    const workLists:WorkType = await client.get({
        endpoint: "cont"
    })

    const paths = workLists.contents.map(workList => `${workList.link_path}`)
    // 事前ビルドしたいパスをpathsとして渡す fallbackについては後述
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps:GetStaticProps = async (context:GetStaticPropsContext) => {
    const id = context.params.id;
    const work:WorkType = await client.get({
        endpoint: "cont",
        queries: {
            filters: `link_path[contains]${id}`,
        }
    });

    return {
        props: {
            work,
        }
    }
}
