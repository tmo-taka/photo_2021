import { ReactNode } from 'react'
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { css ,SerializedStyles, keyframes} from '@emotion/react'
import { menu, Name } from '@features/menu';
import {sp, pc} from '@style/common/mq'

// listsのnameプロパティの値からunion型を作成

type Props = {
  topFlag: boolean,
  menuFlag: boolean,
  name: Name,
  children ?: ReactNode
}

export const List = (props:Props):JSX.Element | null => {
  //NOTE: 動的style
  const list = menu.getListObj(props.name);
  const index = menu.getListObj(props.name);
  const listPosition:SerializedStyles[] = _list(index)
  const styles:SerializedStyles[] = [_base, ...listPosition];
  //NOTE: menuFlagがtrueの場合のみposition指定の表示をする
  if(props.menuFlag){styles.push(_listAnimate(index,props.menuFlag))};

  const topEl:JSX.Element = <li><AnchorLink href={list.to} css={styles}>{list.name}</AnchorLink></li>
  const underLayerEl:JSX.Element =<li><Link href={`/${list.to}`} passHref><a css={styles}>{list.name}</a></Link></li>

  return props.topFlag ? topEl : underLayerEl;
}

const _listAnimate = (index,menuFlag:Props["menuFlag"]):SerializedStyles | undefined => {
  // NOTE:徐々に表示させるアニメーション
  const second:number = 0.3 -((index + 1) * 0.06);
  const delay:string = `${second}s`
  return menuFlag ? css`animation: ${_animate()} .4s ${delay}` : undefined;
}

const _animate = () => keyframes`
  0%,100% {transform: scale(1);}
	30% {transform: translateY(-25%);}
	50% {transform: scale(1);}
	90% {transform: translateY(0); transform: scale(1.2,0.8);}
`

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

const _list = (index):SerializedStyles[] => {
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