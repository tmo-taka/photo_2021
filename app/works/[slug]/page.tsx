import { css } from '@styled-system/css'
import { fetchSingleWork } from '@utils/getDatasFromCms'
import Image from 'next/image'

export default async function Work({ params }: {params: {slug: ApiField.WorkType['slug']}}) {
    const {slug} = params
    const workData = await fetchSingleWork(slug);

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
    m: '0 auto',
    p: '2em 0 6em',
    w: '90vw',
    md: {
        p: '60px 0',
        w: 'contPC'
    }
})

const siteName = css({
    mb: '1em',
    p: '.1em 0',
    w: '100%',
    fontSize: '1.8rem',
    borderBottom: '1px solid token(colors.main)',
    md: {
        mb: '48px',
        p: '8px 0',
        fontSize: '2.4rem',
    }
})

const image = css({
    m: '0 auto 1.2em', w: '100%', h: '12em', pos: 'relative',
    md: {
        m: '0 auto 48px',
        p: '48px 0',
        w: '800px',
        h: '430px',
        pos: 'relative'
    }
})

const text = css({
    lineHeight: '1.8em',
    fontSize: '1.8rem',
    md: {
        lineHeight: '1.8em',
        fontSize: '2.0rem'
    }
})

const list = css({
    p: '2.4em 0',
    md: {
        p: '48px 0 64px',
        m: '0 auto',
        w: 'contPC',
    }
})

const term = css({
    mb: '.4em',
    borderLeft: '2px solid token(colors.main)',
    pl: '2',
    md: {
        mb: '8px',
        display: 'block',
        w: '100%',
        fontSize: '1.6rem',
    }
})

const description = css({
    mb: '1em',
    fontSize: '1.8rem',
    md: {
        mb: '24px',
        pl: '2',
        fontSize: '2rem',
    },
    _lastOfType: {
        mb: '0'
    }
})