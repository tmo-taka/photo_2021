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
        <ul>
            {
                workData.map(work => {
                    return(
                        <li key={work.slug} className={workList}>
                            <a className={workListWrapper}>
                                <div className={css(workImage)}>
                                    <Image
                                        fill
                                        src={work.lead_img.url}
                                        alt={work.site_name}
                                        sizes="(max-width: 768px) 70%, 400px"
                                    />
                                </div>
                                <div>{work.site_name}</div>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const workListWrapper = flex(
    {
        justifyContent: 'space-between',
    }
)

const workList = css(
    {
        m: '0 auto 6em', w: '84vw',
        _last: { mb: 0 },
        md: {w: 'contPC'}
    }
)

const workImage = {
    w: '18em', h: '10em', pos: 'relative',
    md: {w: '400px', h: '200px'}
}
