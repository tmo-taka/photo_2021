import { ReactNode, useState } from 'react'
import { useRouter } from 'next/router';
import { menu, type ListsPropUnion } from '@libs/menu';
import { cx, css } from '@styled-system/css'
import { flex, listAnimation } from "@styled-system/patterns";
import Link from "next/link";
import { ComponentProps } from 'react';


type ListProps = {
    topFlag: boolean,
    menuFlag: boolean,
    name: ListsPropUnion<'name'>,
    children?: ReactNode
}

const List = (props: ListProps):JSX.Element | null => {
    const list = menu.getListObj(props.name);
    const index = menu.whereIndex(props.name);

    const base = {
        p: '3vw 2vw', display: 'block', textAlign: 'center', color: 'black', fontWeight: 'bold', textDecoration: 'none', borderRadius: 'md', pos: 'absolute', w: '20vw', bg: 'white',
        md: {w: '200px', color: 'black', pos: 'static'}
    }

    const link = css({
        md: {
            borderBottomWidth: '1px',
            borderBottomColor: 'transparent',
            transition: '.4s',
            _hover: {
                borderBottomColor: 'main'
            }
        }
    })

    type LinkProps = ComponentProps<typeof Link>;type NextLink = typeof Link;


    const linkObj:LinkProps= {
        href: {
            pathname: '/' + list.to
        },
        as: '/' + list.to,
        scroll: true
    }

    return (
        <li className={cx(listAnimation({index: index}), css(base))}>
            <Link {...linkObj} className={link}>{list.name}</Link>
        </li>
    )
}

type NavigationProps = {
    menuFlag?: boolean,
    children?: ReactNode
}

export const Navigation = ({menuFlag=false, children}:NavigationProps):JSX.Element | null => {
    // NOTE: TOP階層かの判別
    const topFlag:boolean = true
    const [openFlag, setOpenFlag] = useState(false);

    const navigation = css({
        // display: 'none',
        md: {w: '648px', display: 'flex'}
    })

    const navigationWrap = cx(
        css({
            md: {
                m: '0 auto',
                w: 'minPC',
                minW: 'contPC'
            }
        }),
        flex({
            justify: 'space-around',
            align: 'center'
        })
    )

    const title = css({
        display: 'none',
        md: {
            display: 'block',
            fontSize: '2.8rem',
            fontWeight: 'bold',
            letterSpacing: '.1em',
        }
    })

    const spIcon = css({
        pos: 'fixed',
        bottom: '1em',
        right: '1em',
        bg: 'main',
        w: '100%',
        h: '100%',
        borderRadius: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        zIndex: '3',
        transitionTimingFunction: 'linear',
        transitionDuration: '.4s',
        transformOrigin: 'right bottom',
        md: {
            display: 'none'
        }
    })

    const spIconIn = css({
        w: '3.2em',
        h: '3.2em',
        scale: '1',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        pos: 'absolute',
        bottom: '0',
        right: '0'
    })

    const icoBorder = css({
        w: '60%',
        h: '0.2em',
        bg: 'white',
        mb: '3',
        transitionTimingFunction: 'linear',
        transitionDuration: '.4s',
        _lastOfType: {
            mb: '0'
        }
    })

    const topBorder = css({
        transformOrigin: 'left top',
    })

    const bottomBorder = css({
        transformOrigin: 'left bottom',
    })

    return (
        <div className={navigationWrap}>
            <h1 className={title}>
                tmo-taka
            </h1>
            <div className={cx(spIcon, css({scale: openFlag ? '1' : '0.1 0.05', borderRadius: openFlag ? '0' : '100%'}))} onClick={() => setOpenFlag(!openFlag)}>
                <div className={cx(spIconIn, css({scale: openFlag ? '1' : '10 20'}))}>
                    <div className={cx(icoBorder, topBorder, css({rotate: openFlag ? '45deg' : '0'}))}></div>
                    <div className={cx(icoBorder, css({opacity: openFlag ? '0' : '1'}))}></div>
                    <div className={cx(icoBorder, bottomBorder, css({rotate: openFlag ? '-45deg' : '0'}))}></div>
                </div>
            </div>
            <ul className={cx(navigation, flex({justify: 'space-around'}))}>
                {
                    menu.lists.map((list) => {
                        return (<List key={list.name} topFlag={topFlag} menuFlag={menuFlag} name={list.name} />)
                    })
                }
            </ul>
        </div>
    )
}
