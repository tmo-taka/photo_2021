import { ReactNode } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { css } from '@emotion/react'
import {sp, pc} from '@style/common/mq'

const unionLength = (sectionTitle:string):readonly number[] => {
    const arr:string[] = sectionTitle.split("");
    const unionArr:number[] = []
    arr.map((i,index) => unionArr.push(index + 1))
    const type = [...unionArr] as const

    return type
}

type Props = {
    children?: ReactNode,
    section: {
        title: string,
        emIndex: number,
    }
}

export const SectionWrap = (props:Props) => {
    const { title } = props.section
    const camelTitle:string[] = (title.charAt(0).toUpperCase() + title.slice(1)).split("");


    const judgeTitle = (title:string):boolean => {
        return title === 'profile' ? true: false
    }

    return (
        <AnimationOnScroll animateIn="fadeIn" animateOnce={true}>
            <section id={props.section.title} css={judgeTitle(title) ? section_fullWidth: section}>
                <div css={inSection}>
                    <AnimationOnScroll animateIn='bounce'>
                        <h2 css={sectionTitle}>
                            {
                                camelTitle.map((s:string,index:number):ReactNode => {
                                    return props.section.emIndex === (index + 1) ? <span key={index} css={active}>{s}</span> : <span key={index}>{s}</span>
                                })
                            }
                        </h2>
                    </AnimationOnScroll>
                    { props.children }
                </div>
            </section>
        </AnimationOnScroll>
    )
}

const section = (theme) => css`
    ${sp`
        padding: 18% 4.8%;
    `}
    ${pc`
        padding: 80px 0;
        width: 100%;
        min-width: ${theme.width.min};
    `}
`

const section_fullWidth = (theme) => css`
    ${sp`
        padding: 18% 0;
    `}
    ${pc`
        padding: 80px 0;
        width: 100%;
        min-width: ${theme.width.min};
    `}
`

const inSection = (theme) => css`
    ${pc`
        margin: 0 auto;
        width: ${theme.width.min};
    `}
`

const sectionTitle = css`
    ${sp`
        margin-bottom: 8%;
        text-align: center;
        font-size: 3.0rem;
    `}
    ${pc`
        margin-bottom: 32px;
        text-align: center;
        font-size: 3.2rem;
        letter-spacing: 0.1em;
    `}
`

const active = (theme) => css`
    ${sp`
        color: ${theme.colors.primary}
    `}
    ${pc`
        color: ${theme.colors.primary}
    `}
`