import Head from 'next/head'
import { ReactNode } from 'react'

type Props = {
    title: string,
    children?: ReactNode,
}

export const CommonHead = (props:Props) => {
    return (
        <Head>
            <title key={`title_` + props.title} >{`【takaharaポートフォリオ】| ` + props.title }</title>
            <meta key={`ogp_` + props.title} property="og:title" content={`【takaharaポートフォリオ】|` + props.title}/>
        </Head>
    )
}