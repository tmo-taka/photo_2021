import { css, cx } from '@styled-system/css'
// import { motion, useScroll } from "framer-motion"
import { flex } from "@styled-system/patterns";
import { fetchWorks } from '@utils/getDatasFromCms'
import Image from 'next/image'
import Link from 'next/link'
// import { useRef } from 'react'

export default async function Works({ props }) {
    const workData = await fetchWorks();

    return (
        <ul className={works}>
            {
                workData.map(work => {
                    return(
                        <li key={work.slug} className={workList}>
                            <Link href={`/works/${work.slug}`} className={workListLink}>
                                <div className={css(workImage)}>
                                    <Image
                                        fill
                                        src={work.lead_img.url}
                                        alt={work.site_name}
                                        sizes="(max-width: 768px) 70%, 400px"
                                    />
                                </div>
                                <div className={siteTitle} data-text>{work.site_name}</div>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const works = css(
    {
        md: {p: '60px 0'}
    }
)

const workListLink = cx(
    flex(
        {
            alignItems: 'center'
        }
    ),
    css(
        {
            md: {
                p: '36px 20px',
                w: 'contPC',
                borderRadius: 'xl',
                borderWidth: '2px',
                borderColor: '#000',
                pos: 'relative',
                _hover: {
                    borderColor: '#FFF',
                    _before: {
                        bgGradient: "primary",
                    },
                    '&>[data-text]' : {
                        zIndex: '3',
                    }
                },
                _before: {
                    content: '""',
                    borderRadius: 'xl',
                    display: 'block',
                    pos: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: '2',
                    w: '100%',
                    h: '100%',
                    bg: 'transparent'
                }
            }
        }
    )
)

const workList = css(
    {
        m: '0 auto 6em', w: '84vw',
        _last: { mb: 0 },
    }
)

const workImage = {
    w: '18em', h: '10em', pos: 'relative',
    md: {mr: '48px', w: '400px', h: '200px', borderRadius: 'xl', overflow: 'hidden'}
}

const siteTitle = css(
    {
        md: {w: 'calc(100% - (400px + 48px))', fontSize: '2.4rem', textAlign: 'center', pos: 'relative'}
    }
)
