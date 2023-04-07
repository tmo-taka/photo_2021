import { FC,ReactNode,memo } from 'react'
import { List } from '@component/atoms/List'
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { lists } from '@const/Menu';
import {sp, pc} from '@style/common/mq';

type Props = {
    menuFlag?: boolean,
    children?: ReactNode
}

const Nav:FC<Props> = ({menuFlag=false, children}):JSX.Element | null => {
    // NOTE: TOP階層かの判別
    const topFlag:boolean = (useRouter().pathname === '/')

    return (
        <ul css={_nav}>
            {
                lists.map((list) => {
                    return (<List key={list.name} topFlag={topFlag} menuFlag={menuFlag} name={list.name} />)
                })
            }
        </ul>
    )
}

// NOTE: スクロール時に再レンタリングされるためメモ化(引数を受け取るため 型を継承)
export const MemoNav = memo(Nav) as typeof Nav;

const _nav = () => css`
    ${sp`
        width: 18vw;
    `}
    ${pc`
        display :flex;
        justify-content: space-around;
        width: 648px;
    `}
`
