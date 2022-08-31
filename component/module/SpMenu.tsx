import { ReactNode,useState } from 'react'
import MenuList from '@component/atoms/list'
import {sp, pc} from '@style/common/mq'
import { css, SerializedStyles, useTheme,Theme } from '@emotion/react'

type Props = {
    children?: ReactNode,
    displayFlag: boolean
}

type Border = {
    position: "top" | "cen" | "bot",
    active: "isTop" | "isCen" | "isBot",
}

export const SpMenu = (props:Props) => {

    const [menuFlag,setMenuFlag] = useState<boolean>(false)

    const border:Border[] = [
        {position: "top", active: "isTop"},
        {position: "cen", active: "isCen"},
        {position: "bot", active: "isBot"},
    ]

    const menuControl = () => setMenuFlag(!menuFlag);

    return (
        <div>
            <div css={_menuPos(props.displayFlag)} onClick={() =>menuControl()}>
                <div css={_menuIco}>
                    <div css={_icoWrap}>
                        {
                            border.map((data:Border) => {
                                return <span key={data.position} css={menuFlag ? _borderBase(data.active) : _borderBase("")}></span>
                            })
                        }
                    </div>
                </div>
                <nav css={_navWrap(menuFlag)}>
                    <MenuList menuFlag={menuFlag}/>
                </nav>
            </div>
            <div css={_circle(menuFlag)}></div>
        </div>
    );
}

const _menuPos = (displayFlag:boolean):SerializedStyles[] => {
    const styles:SerializedStyles[] = [
        css`
            opacity: 1;
            position: fixed;
            bottom: 3vw;
            right: 6vw;
            z-index: 4;
        `,
        css`
            ${pc`
                display:none
            `}
        `
    ]

    if(!displayFlag){
        const data:SerializedStyles = css`
            opacity: 0;
            transition: opacity .4s;
            z-index: -1;
        `
        styles.push(data)
    }

    return styles
}


const _menuIco = (theme:Theme)=> css`
    display: flex;
    align-items: center;
    width: 12vw;
    height: 12vw;
    background-color: ${theme.colors.primary};
    border-radius: 50%;
`

const _icoWrap = () => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 6vw;
`

const _borderBase = (active:string):SerializedStyles[] => {
    const styles:SerializedStyles[] = [
        css`
        margin: 0 auto .22em;
        display: block;
        width: 1.8em;
        height: .2em;
        background-color: #FFF;
        transition: .2s ease-in;
        `
    ]

    if(active == 'isTop'){
        const data:SerializedStyles = css`
            transform-origin: top left;
            transform: translate(.4em,0) rotate(45deg);
            width: 2.2em;
        `
        styles.push(data)
    }else if(active == 'isCen'){
        const data:SerializedStyles = css`
            opacity: 0;
        `
        styles.push(data)
    }else if(active == 'isBot'){
        const data:SerializedStyles = css`
            transform-origin: bottom left;
            transform: translate(.4em,.5em) rotate(-45deg);
            width: 2.2em;
        `
        styles.push(data)
    }

    return styles
}

const _navWrap = (menuFlag:boolean):SerializedStyles[] => {
    const styles:SerializedStyles[] = [
        css`
        display: none;
        position: absolute;
        bottom: 12vw;
        right: 2vw;
        `
    ]

    if(menuFlag) styles.push(css`display:block;`)

    return styles
}

const _circle = (menuFlag:boolean):SerializedStyles[] => {
    const theme:Theme = useTheme();
    const styles:SerializedStyles[] = [
        css`
        position: fixed;
        z-index:3;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: ${theme.colors.primary};
        transform: scale(0);
        right:-50px;
        bottom:-50px;
        transition: all .6s;
        `
    ]

    if(menuFlag) styles.push(css`transform: scale(50);`)

    return styles
}
