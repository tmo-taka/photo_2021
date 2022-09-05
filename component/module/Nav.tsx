import { FC,ReactNode } from 'react'
import { List } from '@component/atoms/List'
import { useRouter } from 'next/router';
import { css } from '@emotion/react'
import {sp, pc} from '@style/common/mq'

type Props = {
    menuFlag?: boolean,
    children?: ReactNode
}

export const Nav:FC<Props> = ({menuFlag=false, children}) => {
    let topFlag:boolean = useRouter().pathname === '/' ? true: false

    type List = {
        name: string,
        to: string
    }
    const lists:readonly List[] = [
        {name: "Skill", to: "#skill"},
        {name: "Works", to: "#works"},
        {name: "Profile", to: "#profile"},
    ] as const

    return (
        <ul css={_nav}>
            {
                lists.map((list,index:0|1|2) => {return (<List key={list.to} topFlag={topFlag} menuFlag={menuFlag} linkTo={list.to} index={index}>{list.name}</List>)})
            }
        </ul>
    )
}

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
