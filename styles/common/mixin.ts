import { css, SerializedStyles, Theme } from '@emotion/react'
import {sp, pc} from '@style/common/mq'

const mixinBtn = (theme:Theme, spWidth?:number, pcWidth?:number):SerializedStyles => {
    const spBtnWidth:string = spWidth ? spWidth + '%' : '60%';
    const pcBtnWidth:string = pcWidth ? pcWidth + 'px' : '240px';

    return css`
        ${sp`
            border: solid 1px #000;
            padding: 3.6% 4%;
            display: block;
            width: ${spBtnWidth};
            color: #000;
            text-align: center;
            text-decoration: none;
        `}
        ${pc`
            border: solid 1px #000;
            padding: 16px;
            display: block;
            width: ${pcBtnWidth};
            color: #000;
            text-align: center;
            text-decoration: none;
            background: linear-gradient(90deg,
            rgba(0,0,0,.3),
            rgba(0,0,0,.3),
            #ffffff,
            #ffffff);
            background-position: 99% 50%;
            background-size: 300% 300%;
            transition: all 0.7s ease-out;
            &:hover {
                background-position: 1% 50%;
                color: #FFF;
            }
        `}
    `
}

export {
    mixinBtn
}