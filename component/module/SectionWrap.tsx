import type { ReactNode } from 'react'
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import type{ ListsPropUnion } from '@features/menu';
import { menu } from '@features/menu';
import { css } from '@styled-system/css'

type Props = {
    title: ListsPropUnion<'name'>,
    children: ReactNode,
}

export const SectionWrap = (props: Props):JSX.Element | null => {
    const { title } = props;
    const id = menu.getIdFromName(title);
    const emIndex = menu.getIndex(title)
    const splitTitle:string[] = title.split("");
    // const judgeTitle = (title):boolean => { return title === 'Profile'}

    return (
        // <AnimationOnScroll animateIn="fadeIn" animateOnce={true}>
            <section id={id} className={css(section)}>
                <div className={css({md: {m: '0 auto', w: '100%'}})}>
                    {/* <AnimationOnScroll animateIn='bounce' initiallyVisible={true}> */}
                        <h2 className={css(sectionTitle)}>
                            {
                                splitTitle.map((s:string,index:number):ReactNode => {
                                    return emIndex === (index + 1) ? <span key={index} className={css({color: 'main'})}>{s}</span> : <span key={index}>{s}</span>
                                })
                            }
                        </h2>
                    {/* </AnimationOnScroll> */}
                    { props.children }
                </div>
            </section>
        // </AnimationOnScroll>
    )
}

const section = {
    p: '18% 4.8%',
    md: {p: '80px 0', w: '100%', minW: 'minPc'}
}

const sectionTitle = {
    mb: '8%', textAlign: 'center', fontSize: '3.0rem',
    md: {mb: '32px', textAlign: 'center', fontSize: '3.2rem', letterSpacing: '0.1em'}
}