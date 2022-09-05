import { ReactNode } from 'react'
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { css ,SerializedStyles, keyframes} from '@emotion/react'
import {sp, pc} from '@style/common/mq'


type Props = {
  topFlag: boolean,
  menuFlag: boolean,
  linkTo: string,
  index: 0 | 1 | 2
  children ?: ReactNode
}

export const List = (props:Props) => {
  //NOTE: 動的style
  const data:SerializedStyles[] = _list(props.index)
  const styles:SerializedStyles[] = [_base, ...data]
  if(typeof _listAnimate(props.index,props.menuFlag) !== undefined){
    styles.push(_listAnimate(props.index,props.menuFlag))
  }

  if(props.topFlag){
    return <li><AnchorLink href={props.linkTo} css={styles}>{props.children}</AnchorLink></li>
  }else {
    return <li><Link href={`/${props.linkTo}`} passHref><a css={styles}>{props.children}</a></Link></li>
  }
}

const _base = css`
  ${sp`
        padding: 3vw 2vw;
        display: block;
        text-align: center;
        color: #000;
        font-weight: bold;
        text-decoration: none;
        border-radius: 40px;
        position:absolute;
        display: block;
        background-color: #FFF;
        width: 20vw;
        text-align: center;
  `}
  ${pc`
      width: 200px;
      color: #000;
      text-decoration: none;
  `}
`

const _list = (index:Props["index"]):SerializedStyles[] => {
  const styles:SerializedStyles[] = [
    css`
      ${pc`
          width: 200px;
      `}
    `
  ]
  if(index === 0){
    styles.push(css`
      ${sp`
          bottom: 42vw;
          right: 42vw;
      `}
    `)
  }else if(index === 1){
    styles.push(css`
      ${sp`
          bottom: 24vw;
          right: 24vw;
      `}
    `)
  }else if(index === 2){
    styles.push(css`
      ${sp`
          bottom: 6vw;
          right: 6vw;
      `}
    `)
  }

  return styles
}

const _listAnimate = (index:Props["index"],menuFlag:Props["menuFlag"]):SerializedStyles | undefined => {
  const second:number = 0.3 -((index + 1) * 0.06);
  const delay:string = `${second}s`
  if(menuFlag){
    return css`animation: ${_animate()} .4s ${delay};`
  }else {
    return undefined
  }
}

const _animate = () => keyframes`
  0%,100% {transform: scale(1);}
	30% {transform: translateY(-25%);}
	50% {transform: scale(1);}
	90% {transform: translateY(0); transform: scale(1.2,0.8);}
`