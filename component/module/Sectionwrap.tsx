import { ReactNode } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { css, Theme } from '@emotion/react'
import { lists } from '@const/Menu';
import {sp, pc} from '@style/common/mq'
import "animate.css/animate.min.css";

type Title = typeof lists[number]['name'];

type Props = {
    children?: ReactNode,
    title: Title,
}

export const SectionWrap = (props: Props):JSX.Element | null => {
    const { title } = props
    const emIndex:number = lists.find((obj) => obj.name === title).emIndex;
    const splitTitle:string[] = title.split("");
    const judgeTitle = (title):boolean => { return title === 'Profile'}

    return (
        <AnimationOnScroll animateIn="fadeIn" animateOnce={true}>
            <section id={title} css={judgeTitle(title) ? _sectionFullWidth: _section}>
                <div css={_inSection}>
                    <AnimationOnScroll animateIn='bounce' initiallyVisible={true}>
                        <h2 css={_sectionTitle}>
                            {
                                splitTitle.map((s:string,index:number):ReactNode => {
                                    return emIndex === (index + 1) ? <span key={index} css={_active}>{s}</span> : <span key={index}>{s}</span>
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