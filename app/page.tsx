"use client"

import { css } from '@styled-system/css'
import { stack, vstack, hstack } from '../styled-system/patterns'
import { Logo } from '@component/atoms/Logo'
import { SectionWrap } from '@component/module/SectionWrap'

export default function Home({ props }) {
    return (
        <div>
            <div className={css({
                w:'100%', h:'100vh', p: '6vw', bg: 'main',
                md: {minW: '1280px', minH: 'calc(100vh - 173px)', p: '88px 64px 12px', bg: '#FFF' }
            })}>
                <h1 className={css({
                    pos: 'relative',
                    md: {pos: 'realtive', m: '0 auto', w: '600px', fontSize: '2.4rem', textAlign: 'center',
                        _before: {content: '', pos: 'absolute', bg: 'main', w: '0', h: '2px', transition: 'all', transitionDuration: '0.2', transitionTimingFunction: 'linear', right: '0', bottom: '0'},
                        _after: {content: '', pos: 'absolute', bg: 'main', w: '0', h: '2px', transition: 'all', transitionDuration: '0.2', transitionTimingFunction: 'linear', left: '0', top: '0'}
                    }
                })}>
                    <div className={css({
                        m: {base: '0 auto', md: undefined},
                        pos: {base: 'absolute', md: undefined},
                        top: {base: '50%', md: undefined},
                        left: {base: '0', md: undefined},
                        right: {base: '0', md: undefined},
                        y: {base: '50%', md: undefined},
                        md: {
                            _before: {content: '', bg: 'main', w: '2px', h: '0', transition: 'all', transitionDuration: '0.1', transitionTimingFunction: 'linear', left: '0', bottom: '0'},
                            _after: {content: '', pos: 'absolute', bg: 'main', w: '2px', h: '0', transition: 'all', transitionDuration: '0.1', transitionTimingFunction: 'linear', right: '0', bottom: '0'}
                        }
                    })}>
                        <Logo />
                    </div>
                </h1>
            </div>

            <SectionWrap title={'Skill'}>
            </SectionWrap>
        </div>
    )
}