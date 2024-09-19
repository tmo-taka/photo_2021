import { css, cx } from '@styled-system/css'
import { flex } from "@styled-system/patterns";
import { Logo } from '@component/atoms/Logo'
import { SectionWrap } from '@component/SectionWrap'
import { SkillLists } from '@component/SkillLists'
import { Loading } from '@component/Loading'
import { Navigation } from '@component/Navigation'
import { fetchProgrammings , fetchTools} from '@utils/getDatasFromCms'
import { Suspense } from 'react'


export default async function Home({ props }) {
    console.log('kore')
    const programmingData = await fetchProgrammings()
    const toolData = await fetchTools();

    return (
        <div>
            <Navigation />
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
                <div className={
                        cx(css(skillBlock),flex({justify: 'space-around', wrap: 'wrap'}))
                    }
                >
                    <div className={css(skillBlockIn)}>
                        <h3 className={css(skillTitle)}>programming</h3>
                        <Suspense fallback={(<Loading />)}>
                            <SkillLists lists={programmingData} />
                        </Suspense>
                    </div>
                    <div className={css(skillBlockIn)}>
                        <h3 className={css(skillTitle)}>tools</h3>
                        <Suspense fallback={(<Loading />)}>
                            <SkillLists lists={toolData}/>
                        </Suspense>
                    </div>
                </div>
            </SectionWrap>

            <SectionWrap title={'Works'}>
            </SectionWrap>

            <SectionWrap title={'Profile'}>
                <dl className={css(profileBlock)}>
                    <dt className={css(profileTitle)}>Name:</dt>
                    <dd className={cx(css(profileCont), css({mb: '6vw', md: {mb: '36px'}}))}>Takahara Tomoya</dd>
                    <dt className={css(profileTitle)}>Carier:</dt>
                    <dd className={css(profileCont)}>名城大学を卒業後、新卒として、株式会社ウェブクルーに入社</dd>
                </dl>
            </SectionWrap>
        </div>
    )
}

const skillBlock = {
    md:{ m: '0 auto', p: '64px 0', w: 'minPC'}
}

const skillBlockIn = {
    m: '0 auto', w: '86vw', p: '10% 0',
    md:{ p: '0', w: 'auto'}
}

const skillTitle = {
    mb: '5.8%', fontSize: '3.6rem',
    md: {mb: '24px'}
}

const profileBlock = {
    m: '0 auto', p: '14% 4%', pos: 'relative', w: '100%', color: 'white', bgImage: 'illustBack', bgPosition: 'top left', bgSize: '4px auto', bgColor: 'main',
    md: {p: '48px', w: '1000px', boxShadow: '5px 10px 20px rgba(0,0,0,0.25)', color: 'black', bg: 'none'}
}

const profileTitle = {
    mb: '2.4vw', fontSize: '1.6rem',
    md: {mb: '24px', fontSize: '2.0rem'}
}

const profileCont = {
    fontSize: '1.6rem', lineHeight: '1.4rem',
    md: {fontSize: '2.0rem', lineHeight: '1.4rem', borderBottom: 'solid #000 1px'}
}