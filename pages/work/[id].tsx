import React, {FC} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import styles from '@style/module/top.module.scss'
import { motion } from "framer-motion";
import { client } from "../api/client";
import { GetServerSideProps , InferGetServerSidePropsType } from 'next';

const Work_Topic: FC = ({ work }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const data =  work.contents[0];

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
        <h1 className={styles.title}>{data.site_name}</h1>
        <div className={styles.imgBox}>
            <Image src={data.lead_img.url} layout={'responsive'} width={320} height={180}/>
        </div>

        {((data) => {
            if(data.create_time){
                {
                    return(
                        <div className={styles.detailBox}>
                            <dl className={styles.detailBox__lists}>
                                <dt>作成時期</dt><dd>{data.creat_time}</dd>
                                <dt>スキル</dt><dd>{data.create_skill}</dd>
                                <dt>作成期間</dt><dd>{data.create_span}</dd>
                            </dl>
                        </div>
                    )
                }
            }
        })(data)}

        {((data) => {
            if(data.create_time){
                <div className={styles.contentBox}>
                    <p className={styles.contentBox__txt}>{data.service_txt}</p>
                </div>
            }
        })(data)}

        </motion.div>
    </div>
    )
}

export default Work_Topic;

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

export const getServerSideProps:GetServerSideProps = async (context) => {
    const id = context.query.id;
    const work:WorkType[] = await client.get({
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
