import {FC} from 'react'
import Link from 'next/link'
import styles from '@style/module/work/topic.module.scss'
import { MotionLayout } from '@layout/MotionLayout'
import { fetchWorks } from "../api/getData"
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery} from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps, InferGetServerSidePropsType } from 'next';
import * as apiField from 'apiField';

const queryClient = new QueryClient()

const Work_Topic:FC = ({ work }: InferGetServerSidePropsType<typeof getStaticProps>) => {

    type useQueryWrapper<T> = {
        data: T,
        isLoading: boolean,
        isError: boolean
    }

    const {data,isLoading:isError}:useQueryWrapper<apiField.WorkType[]> = useQuery(['works'],fetchWorks,{cacheTime: Infinity});
    const router = useRouter();
    const targetWork:apiField.WorkType = data.find((work) => work.slug === router.query.id);

    return (
        <MotionLayout title={targetWork.site_name}>
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

        </MotionLayout>
    )
}

export default Work_Topic;

export const getStaticPaths:GetStaticPaths = async () => {
    const works = await fetchWorks();
    const paths = works.map(workList => `/work/${workList.slug}/`)

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps:GetStaticProps = async () => {
    await queryClient.prefetchQuery(['works'], fetchWorks);
    const queryData= dehydrate(queryClient);

    return {
        props: {
        queryData,
        }
    }
}
