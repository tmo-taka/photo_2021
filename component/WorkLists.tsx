"use client"

import { motion, useScroll } from "framer-motion"
import { css, cx } from '@styled-system/css'
import { flex } from "@styled-system/patterns";
import Image from 'next/image'
import { useRef } from 'react'

type Props = {
    workData: ApiField.WorkType[]
}

export const WorkLists = (props: Props):JSX.Element=> {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll();
    console.log(scrollYProgress);
    const workListElement:JSX.Element[] = []
    for (const work of props.workData) {
        workListElement.push(
            <motion.a
                initial={{ opacity: 0, transform: 'translate(0,30px)' }}
                whileInView={{ opacity: 1, transform: 'translate(0,0)' }}
                viewport={{ once: true }}
                key={work.id}
                className={workList}
            >
                <div className={css(workTitle)}>
                    <motion.div
                        initial={{ scaleX: '0' }}
                        whileInView={{ scaleX: '100%', transitionDelay: '250ms' }}
                        className={css(workTitleMarker)}
                    >
                    </motion.div>
                    <span className={css({pos: 'relative', zIndex: '2'})}>{work.site_name}</span>
                </div>
                <div className={css(workImage)}>
                    <Image
                        fill
                        src={work.lead_img.url}
                        alt={work.site_name}
                        sizes="(max-width: 768px) 70%, 400px"
                    />
                </div>
            </motion.a>
        )
    }

    return (
        <div ref={ref}>
            {workListElement}
        </div>
    )
}

const workList = cx(
    css(
        {
            m: '0 auto 6em', w: '84vw',
            _last: { mb: 0 },
            md: {w: 'contPC'}
        }
    ),
    flex(
        {
            justifyContent: 'space-between',
            _odd: {
                flexDirection: 'row-reverse',
            }
        }
    )
)

const workImage = {
    w: '18em', h: '10em', pos: 'relative',
    md: {w: '400px', h: '200px'}
}

const workTitle = {
    fontSize: '2.0rem', pos: 'relative',
    md: {fontSize: '2.4rem'}
}

const workTitleMarker = {
    pos: 'absolute',
    top: '.9em',
    h: '.2em',
    w: '100%',
    bg: 'accent/40',
}