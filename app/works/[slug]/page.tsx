import { css } from '@styled-system/css'
import { fetchSingleWork } from '@utils/getDatasFromCms'
import Image from 'next/image'

export default async function Work({ params }: {params: {slug: ApiField.WorkType['slug']}}) {
    const {slug} = params
    const workData = await fetchSingleWork(slug);
    console.log(workData);

    return (
        <div className={body}>
            <h1 className={siteName}>{workData.site_name}</h1>
            <div className={image}>
                <Image
                    fill
                    src={workData.lead_img.url}
                    alt={workData.site_name}
                    sizes="(max-width: 768px) 70%, 400px"
                />
            </div>
            <dl className={list}>
                <dt className={term}>作成期間</dt>
                <dd className={description}>{workData.create_time}</dd>
                <dt className={term}>用いた技術</dt>
                <dd className={description}>{workData.create_skill}</dd>
            </dl>
            <p className={text}>
                {workData.service_txt}
            </p>
        </div>
    )
}

const body = css({
    md: {
        m: '0 auto',
        p: '60px 0',
        w: 'contPC'
    }
})

const siteName = css({
    md: {
        mb: '48px',
        p: '8px 0',
        fontSize: '2.4rem',
        w: '100%',
        borderBottom: '1px solid token(colors.main)'
    }
})

const image = css({
    md: {
        m: '0 auto 48px',
        p: '48px 0',
        w: '800px',
        h: '430px',
        pos: 'relative'
    }
})

const text = css({
    md: {
        lineHeight: '1.8em',
        fontSize: '2.0rem'
    }
})

const list = css({
    md: {
        p: '48px 0 64px',
        m: '0 auto',
        w: 'contPC',
    }
})

const term = css({
    md: {
        mb: '8px',
        pl: '2',
        display: 'block',
        w: '100%',
        fontSize: '1.6rem',
        borderLeft: '2px solid token(colors.main)'
    }
})

const description = css({
    md: {
        mb: '24px',
        pl: '2',
        fontSize: '2rem',
        _lastOfType: {
            mb: '0'
        }
    }
})