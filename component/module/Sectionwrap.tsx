import { ReactNode } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { css, Theme } from '@emotion/react'
import {sp, pc} from '@style/common/mq'
import "animate.css/animate.min.css";

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
            <section id={props.section.title} css={judgeTitle(title) ? _sectionFullWidth: _section}>
                <div css={_inSection}>
                    <AnimationOnScroll animateIn='bounce' initiallyVisible={true}>
                        <h2 css={_sectionTitle}>
                            {
                                camelTitle.map((s:string,index:number):ReactNode => {
                                    return props.section.emIndex === (index + 1) ? <span key={index} css={_active}>{s}</span> : <span key={index}>{s}</span>
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

const _section = (theme:Theme) => css`
    ${sp`
        padding: 18% 4.8%;
    `}
    ${pc`
        padding: 80px 0;
        width: 100%;
        min-width: ${theme.width.min};
    `}
`

const _sectionFullWidth = (theme:Theme) => css`
    ${sp`
        padding: 18% 0;
    `}
    ${pc`
        padding: 80px 0;
        width: 100%;
        min-width: ${theme.width.min};
    `}
`

const _inSection = (theme:Theme) => css`
    ${pc`
        margin: 0 auto;
        width: ${theme};
    `}
`

const _sectionTitle = css`
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

const _active = (theme:Theme) => css`
    color: ${theme.colors.primary}
`