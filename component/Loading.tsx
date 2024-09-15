import { css, cx } from '@styled-system/css'
import { flex } from "@styled-system/patterns";

export const Loading = ():JSX.Element=> {
    return (
        <div className={cx(flex({justify: 'space-between'}), css(box))}>
            <div className={css(ball('-140ms'))}></div>
            <div className={css(ball('-70ms'))}></div>
            <div className={css(ball('0s'))}></div>
        </div>
    )
}

const box = {
    w: '10vw',
    md: {w: '120px'}
}

const ball = (delayTime: string) => {
    return {
        m: '.1em',
        w: '1.6em',
        h: '1.6em',
        bg: 'main',
        borderRadius: 'full',
        animation: 'loadingAnimate',
        animationDuration: '.6s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDelay: `${delayTime}`
    }
}