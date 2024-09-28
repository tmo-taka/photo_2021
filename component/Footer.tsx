import { css, cx } from '@styled-system/css';
import { flex } from '@styled-system/patterns';
import { Git } from '@img/ico/Git'
import { Zenn } from '@img/ico/Zenn'
import { Qiita } from '@img/ico/Qiita'

export const Footer = () => {
    return (
        <footer className={footer}>
            <div className={inFooter}>
                <div className={icons}>
                    <a href="https://github.com/tmo-taka" target="_blank" className={icon} >
                        <Git />
                    </a>
                    <a href="https://qiita.com/wc-takahara" target="_blank" className={icon} >
                        <Qiita />
                    </a>
                    <a href="https://zenn.dev/tmo_taka" target="_blank" className={icon} >
                        <Zenn />
                    </a>
                </div>
                <small>Copyright © 2024 Apple Inc. All rights reserved.</small>
            </div>
        </footer>
    )
}

const footer = css({
    p: '0 0 6%',
    w: '100%',
    md: {
        p: '24px 0',
        borderTop: 'solid 1px #CCC',
        w: '100%',
        minW: 'minPC'

    }
})

const inFooter = css({
    textAlign: 'center',
    color: '#000',
    fontSize: '1.2rem',
    md: {
        fontSize: '1.3rem',
    }
})

const icons = cx(
    css({
        margin: '0 auto 4.8vw',
        width: '36vw',
        md: {
            margin: '0 auto 24px',
            width: '160px',
        }
    }),
    flex({
        justifyContent: 'space-between',
    }),
)

const icon = css({
    // スマートフォン向けスタイル
    display: 'inline-block',
    width: '8.8vw',
    height: 'auto',
    // PC向けスタイル（mdブレークポイント以上）
    md: {
        display: 'inline-block',
        width: '36px',
        height: 'auto',
        _hover: {
            opacity: 0.7, // hover時のスタイル
        },
    },
});
