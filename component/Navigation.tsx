import { ReactNode} from 'react'
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

    const navigation = {
        w: '18vw',
        md: {w: '648px'}
    }

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
        md: {
            fontSize: '2.8rem',
            fontWeight: 'bold',
            letterSpacing: '.1em'
        }
    })

    return (
        <div className={navigationWrap}>
            <h1 className={title}>
                tmo-taka
            </h1>
            <ul className={cx(css(navigation), flex({justify: 'space-around'}))}>
                {
                    menu.lists.map((list) => {
                        return (<List key={list.name} topFlag={topFlag} menuFlag={menuFlag} name={list.name} />)
                    })
                }
            </ul>
        </div>
    )
}
