import { ReactNode } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

type Props = {
    children?: ReactNode,
}

export const SectionWrap = (props:Props)=> {

    return (
        <AnimationOnScroll animateIn="fadeIn" animateOnce={true}>
            { props.children }
        </AnimationOnScroll>
    )
}