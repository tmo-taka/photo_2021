import { memo } from 'react'
import { css, Theme, keyframes } from '@emotion/react'
import {sp, pc} from '@style/common/mq'

export const ElementLogo = () => {
  return (
    <svg version="1.1" id="logo" css={_logo} xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 800 800" xmlSpace="preserve">
        <g id="logo_x5F_bottom">
            <path id="logo_x5F_bottom_x5F_p" css={_item} d="M255.641 431.934v2.361c0 .809-.021 1.574-.061 2.301 3.027-1.695 6.327-3.066 9.899-4.117 3.572-1.049 7.356-1.574 11.353-1.574 3.672 0 6.831.605 9.476 1.816 2.643 1.211 4.813 2.876 6.509 4.995s2.937 4.622 3.724 7.508 1.181 6.005 1.181 9.354c0 5.895-.787 11.494-2.361 16.802s-3.806 9.96-6.69 13.956c-2.887 3.996-6.388 7.166-10.505 9.506-4.117 2.342-8.719 3.512-13.805 3.512-1.777 0-3.391-.121-4.844-.363s-2.856-.615-4.208-1.12a30.244 30.244 0 01-4.057-1.877 53.19 53.19 0 01-4.329-2.694l-5.752 32.453h-9.566l14.41-83.191c.08-.281.182-.838.303-1.665s.242-1.745.363-2.755c.121-1.008.221-1.998.303-2.967.08-.969.121-1.715.121-2.24h8.536zm17.619 7.144c-1.857 0-3.522.082-4.995.242a31.967 31.967 0 00-4.269.757c-1.373.343-2.755.808-4.147 1.393s-2.937 1.302-4.632 2.149l-7.084 40.869c1.291 1.172 2.612 2.119 3.966 2.846a21.84 21.84 0 004.026 1.695c1.332.404 2.612.676 3.845.817 1.23.142 2.392.212 3.481.212 2.744 0 5.237-.484 7.478-1.453s4.258-2.291 6.055-3.966c1.795-1.675 3.35-3.622 4.662-5.843a40.262 40.262 0 003.3-7.114c.887-2.522 1.544-5.116 1.968-7.78s.636-5.268.636-7.811c0-2.502-.212-4.783-.636-6.842s-1.181-3.845-2.271-5.358-2.554-2.694-4.39-3.542c-1.838-.847-4.169-1.271-6.993-1.271z"/>
            <path id="logo_x5F_bottom_x5F_o1" css={_em} d="M337.016 498.354c-4.32 0-8.104-.586-11.353-1.756-3.25-1.17-5.955-2.865-8.113-5.086-2.16-2.219-3.775-4.914-4.844-8.083-1.07-3.169-1.604-6.729-1.604-10.687 0-3.592.394-7.114 1.181-10.565s1.938-6.729 3.451-9.839a42.633 42.633 0 015.54-8.598 36.353 36.353 0 017.417-6.781c2.764-1.896 5.802-3.381 9.112-4.45 3.309-1.069 6.861-1.604 10.656-1.604 4.035 0 7.588.636 10.656 1.907 3.066 1.271 5.64 3.048 7.72 5.328 2.078 2.28 3.642 5.005 4.692 8.174 1.049 3.169 1.574 6.651 1.574 10.444 0 3.352-.394 6.701-1.181 10.051a47.664 47.664 0 01-3.391 9.657c-1.475 3.088-3.27 5.964-5.389 8.628s-4.521 4.975-7.205 6.933a34.457 34.457 0 01-8.779 4.632c-3.169 1.128-6.549 1.695-10.14 1.695zm.908-7.69c2.543 0 4.943-.454 7.205-1.362a22.408 22.408 0 006.176-3.724c1.855-1.574 3.521-3.421 4.995-5.54 1.473-2.119 2.725-4.399 3.754-6.842s1.806-4.985 2.331-7.629c.523-2.644.787-5.257.787-7.841 0-2.543-.324-4.984-.969-7.326-.646-2.34-1.635-4.379-2.967-6.115-1.332-1.734-3.019-3.118-5.056-4.147-2.039-1.029-4.472-1.544-7.296-1.544-3.674 0-7.084.838-10.232 2.513s-5.873 3.996-8.174 6.963-4.108 6.489-5.419 10.565c-1.312 4.078-1.968 8.498-1.968 13.26 0 2.625.443 5.086 1.332 7.387.887 2.301 2.089 4.299 3.603 5.994s3.289 3.018 5.328 3.966c2.038.947 4.228 1.422 6.57 1.422z"/>
            <path id="logo_x5F_bottom_x5F_r" css={_item} d="M403.496 431.934v1.09c0 1.252-.091 2.705-.272 4.359a216.398 216.398 0 01-.696 5.57 37.19 37.19 0 014.753-4.844 34.08 34.08 0 015.661-3.905c2.018-1.11 4.147-1.938 6.388-2.482s4.55-.817 6.933-.817c.523 0 1.068.041 1.635.121.564.082.988.162 1.271.242l-3.814 9.99c-.646-.201-1.332-.333-2.059-.394s-1.555-.091-2.482-.091c-2.826 0-5.248.252-7.266.757-2.02.505-3.806 1.263-5.358 2.271a22.554 22.554 0 00-4.178 3.481c-1.232 1.312-2.19 2.716-2.876 4.208l-7.932 45.834h-9.566l10.051-58.125c.281-1.613.515-2.986.696-4.117a19.87 19.87 0 00.272-3.148h8.839z"/>
            <path id="logo_x5F_bottom_x5F_t" css={_item} d="M432.922 433.932l9.445-1.998 2.846-16.529h9.566l-2.846 16.529h15.924l-2.482 8.295H450.48l-6.539 37.781a31.03 31.03 0 00-.363 2.573 29.586 29.586 0 00-.121 2.876c0 2.262.433 3.986 1.302 5.177.867 1.19 2.411 1.786 4.632 1.786.523 0 1.241-.051 2.149-.151s1.866-.231 2.876-.394a65.042 65.042 0 002.846-.515c.887-.182 1.553-.353 1.998-.515l-.727 7.689c-.848.324-1.827.596-2.937.817-1.111.222-2.21.413-3.3.575-1.09.16-2.1.272-3.027.333-.93.061-1.635.091-2.119.091-2.584 0-4.753-.293-6.509-.878s-3.179-1.393-4.269-2.422-1.868-2.261-2.331-3.693c-.465-1.433-.696-3.017-.696-4.753 0-1.938.201-3.975.605-6.115l6.963-40.264h-9.445l1.454-6.295z"/>
            <path id="logo_x5F_bottom_x5F_f" css={_item} d="M485.477 425.213c.766-4.48 2.037-8.314 3.814-11.504 1.775-3.188 3.895-5.803 6.357-7.841a24.082 24.082 0 018.234-4.48 31.42 31.42 0 019.445-1.423c2.34 0 4.621.252 6.842.757 2.219.505 4.035 1.241 5.449 2.21l-5.57 8.234a20.44 20.44 0 00-1.726-1.181c-.627-.384-1.332-.727-2.119-1.029s-1.665-.554-2.634-.757c-.969-.201-2.039-.303-3.209-.303-3.754 0-6.731.797-8.931 2.392-2.201 1.595-3.845 4.169-4.935 7.72-.445 1.535-.919 3.533-1.423 5.994a414.316 414.316 0 00-1.544 7.932h13.018l-1.998 7.992h-12.412l-9.566 57.035c-.688 4.117-1.494 7.68-2.422 10.687-.93 3.007-1.959 5.57-3.088 7.689-1.131 2.119-2.361 3.835-3.693 5.146s-2.755 2.341-4.269 3.088-3.088 1.251-4.723 1.514-3.34.394-5.116.394c-.929 0-1.887-.061-2.876-.182s-1.968-.312-2.937-.575-1.897-.575-2.785-.938-1.675-.787-2.361-1.271l3.996-8.779a54.341 54.341 0 004.087 2.664c1.312.766 2.694 1.15 4.147 1.15 1.896 0 3.521-.434 4.874-1.302 1.352-.868 2.513-2.13 3.481-3.784.969-1.656 1.786-3.715 2.452-6.176.666-2.463 1.261-5.309 1.786-8.537l9.445-57.822h-8.84l1.09-5.752 9.445-2.24 1.215-6.722z"/>
            <path id="logo_x5F_bottom_x5F_o2" css={_item} d="M537.305 498.354c-4.32 0-8.104-.586-11.353-1.756-3.25-1.17-5.955-2.865-8.113-5.086-2.16-2.219-3.775-4.914-4.844-8.083-1.07-3.169-1.604-6.729-1.604-10.687 0-3.592.394-7.114 1.181-10.565s1.938-6.729 3.451-9.839a42.633 42.633 0 015.54-8.598 36.353 36.353 0 017.417-6.781c2.764-1.896 5.802-3.381 9.112-4.45 3.309-1.069 6.861-1.604 10.656-1.604 4.035 0 7.588.636 10.656 1.907 3.066 1.271 5.64 3.048 7.72 5.328 2.078 2.28 3.642 5.005 4.692 8.174 1.049 3.169 1.574 6.651 1.574 10.444 0 3.352-.394 6.701-1.181 10.051a47.664 47.664 0 01-3.391 9.657c-1.475 3.088-3.27 5.964-5.389 8.628s-4.521 4.975-7.205 6.933a34.457 34.457 0 01-8.779 4.632c-3.169 1.128-6.549 1.695-10.14 1.695zm.908-7.69c2.543 0 4.943-.454 7.205-1.362a22.408 22.408 0 006.176-3.724c1.855-1.574 3.521-3.421 4.995-5.54 1.473-2.119 2.725-4.399 3.754-6.842s1.806-4.985 2.331-7.629c.523-2.644.787-5.257.787-7.841 0-2.543-.324-4.984-.969-7.326-.646-2.34-1.635-4.379-2.967-6.115-1.332-1.734-3.019-3.118-5.056-4.147-2.039-1.029-4.472-1.544-7.296-1.544-3.674 0-7.084.838-10.232 2.513s-5.873 3.996-8.174 6.963-4.108 6.489-5.419 10.565c-1.312 4.078-1.968 8.498-1.968 13.26 0 2.625.443 5.086 1.332 7.387.887 2.301 2.089 4.299 3.603 5.994s3.289 3.018 5.328 3.966c2.038.947 4.228 1.422 6.57 1.422z"/>
            <path id="logo_x5F_bottom_x5F_l" css={_item} d="M600.395 402.447h9.566l-14.168 81.496a12.01 12.01 0 00-.242 2.361c0 1.656.474 2.734 1.423 3.239.947.505 2.37.757 4.269.757.322 0 .796-.02 1.423-.061.625-.039 1.261-.1 1.907-.182l.424 5.57a41.584 41.584 0 01-5.51 1.847c-1.01.263-2.009.474-2.997.636-.99.16-1.907.242-2.755.242-1.051 0-2.08-.131-3.088-.394a6.684 6.684 0 01-2.664-1.362c-.768-.645-1.384-1.514-1.847-2.604-.465-1.09-.696-2.461-.696-4.117 0-1.09.121-2.301.363-3.633l14.592-83.795z"/>
            <path id="logo_x5F_bottom_x5F_i"  css={_item}d="M627.035 431.934h9.566l-11.322 65.391h-9.566l11.322-65.391zm9.445-27.004c1.492 0 2.653.454 3.481 1.362.826.908 1.241 2.009 1.241 3.3a6.67 6.67 0 01-.515 2.573 7.283 7.283 0 01-1.423 2.21 6.894 6.894 0 01-2.149 1.544 6.185 6.185 0 01-2.634.575c-1.414 0-2.564-.494-3.451-1.483-.889-.989-1.332-2.128-1.332-3.421 0-.928.182-1.795.545-2.604a6.776 6.776 0 011.483-2.119 6.991 6.991 0 012.149-1.423 6.616 6.616 0 012.605-.514z"/>
            <path id="logo_x5F_bottom_x5F_o3" css={_item} d="M674.08 498.354c-4.32 0-8.104-.586-11.353-1.756-3.25-1.17-5.955-2.865-8.113-5.086-2.16-2.219-3.775-4.914-4.844-8.083-1.07-3.169-1.604-6.729-1.604-10.687 0-3.592.394-7.114 1.181-10.565s1.938-6.729 3.451-9.839a42.633 42.633 0 015.54-8.598 36.353 36.353 0 017.417-6.781c2.764-1.896 5.802-3.381 9.112-4.45 3.309-1.069 6.861-1.604 10.656-1.604 4.035 0 7.588.636 10.656 1.907 3.066 1.271 5.64 3.048 7.72 5.328 2.078 2.28 3.642 5.005 4.692 8.174 1.049 3.169 1.574 6.651 1.574 10.444 0 3.352-.394 6.701-1.181 10.051a47.664 47.664 0 01-3.391 9.657c-1.475 3.088-3.27 5.964-5.389 8.628s-4.521 4.975-7.205 6.933a34.457 34.457 0 01-8.779 4.632c-3.168 1.128-6.548 1.695-10.14 1.695zm.908-7.69c2.543 0 4.943-.454 7.205-1.362a22.408 22.408 0 006.176-3.724c1.855-1.574 3.521-3.421 4.995-5.54 1.473-2.119 2.725-4.399 3.754-6.842s1.806-4.985 2.331-7.629c.523-2.644.787-5.257.787-7.841 0-2.543-.324-4.984-.969-7.326-.646-2.34-1.635-4.379-2.967-6.115-1.332-1.734-3.019-3.118-5.056-4.147-2.039-1.029-4.472-1.544-7.296-1.544-3.674 0-7.084.838-10.232 2.513s-5.873 3.996-8.174 6.963-4.108 6.489-5.419 10.565c-1.312 4.078-1.968 8.498-1.968 13.26 0 2.625.443 5.086 1.332 7.387.887 2.301 2.089 4.299 3.603 5.994s3.289 3.018 5.328 3.966c2.038.947 4.228 1.422 6.57 1.422z"/>
        </g>
        <g id="logo_x5F_top">
            <path id="logo_x5F_top_x5F_t" css={_item} d="M68.058 248.416l9.445-1.998 2.846-16.529h9.566l-2.846 16.529h15.924l-2.482 8.295H85.617l-6.539 37.781a31.03 31.03 0 00-.363 2.573 29.6 29.6 0 00-.121 2.876c0 2.261.433 3.987 1.302 5.177.868 1.191 2.412 1.786 4.632 1.786.524 0 1.241-.05 2.149-.151.908-.1 1.867-.232 2.876-.394a66.287 66.287 0 002.846-.515c.887-.182 1.553-.353 1.998-.515l-.727 7.689c-.848.324-1.827.596-2.937.817-1.111.221-2.21.414-3.3.575a37.79 37.79 0 01-3.027.333c-.929.061-1.635.091-2.119.091-2.583 0-4.753-.293-6.509-.878s-3.179-1.393-4.269-2.422-1.868-2.26-2.331-3.693c-.464-1.432-.696-3.017-.696-4.753 0-1.938.202-3.975.605-6.115l6.963-40.264h-9.445l1.453-6.295z"/>
            <path id="logo_x5F_top_x5F_a1" css={_em} d="M151.128 311.808a83.132 83.132 0 01-.121-4.541c0-1.09.04-2.219.121-3.391a42.92 42.92 0 01.424-3.693c-1.373 2.503-2.846 4.551-4.42 6.146-1.574 1.595-3.26 2.876-5.056 3.845a20.46 20.46 0 01-5.691 2.059 31.01 31.01 0 01-6.146.605c-2.867 0-5.601-.525-8.204-1.574s-4.884-2.634-6.842-4.753c-1.958-2.119-3.533-4.762-4.723-7.932-1.191-3.168-1.786-6.912-1.786-11.231 0-5.53.827-10.817 2.482-15.863 1.655-5.045 4.208-9.496 7.659-13.351 3.451-3.854 7.85-6.942 13.199-9.264 5.348-2.321 11.736-3.481 19.163-3.481.969 0 2.28.071 3.936.212 1.655.142 3.37.324 5.146.545 1.776.222 3.481.475 5.116.757 1.635.283 2.896.566 3.784.848l-7.084 39.113a188.162 188.162 0 00-.727 4.783 145.832 145.832 0 00-.636 5.268 119.93 119.93 0 00-.424 5.237 79.546 79.546 0 00-.151 4.632c0 1.09.04 2.028.121 2.815.081.787.182 1.524.303 2.21h-9.443zm7.145-57.338c-1.332-.686-2.886-1.25-4.662-1.695-1.777-.444-3.855-.666-6.236-.666-3.391 0-6.772.696-10.142 2.089-3.371 1.393-6.398 3.481-9.082 6.267-2.685 2.785-4.865 6.267-6.539 10.444-1.675 4.178-2.513 9.073-2.513 14.683 0 2.785.323 5.338.969 7.659.645 2.322 1.553 4.339 2.725 6.055 1.17 1.716 2.583 3.068 4.238 4.057a10.307 10.307 0 005.389 1.483c2.543 0 4.935-.524 7.175-1.574a21.45 21.45 0 006.024-4.208c1.776-1.756 3.279-3.804 4.511-6.146a24.8 24.8 0 002.513-7.447l5.63-31.001z"/>
            <path id="logo_x5F_top_x5F_k" css={_item} d="M195.267 271.544l30.576-25.127h12.775l-33.18 26.822 23.068 38.568h-11.322l-18.104-34.451-5.328 3.814-5.268 30.637h-9.566l16.469-94.877h9.566l-9.686 54.614z"/>
            <path id="logo_x5F_top_x5F_a2" css={_item} d="M285.966 311.808a83.132 83.132 0 01-.121-4.541c0-1.09.04-2.219.121-3.391a42.92 42.92 0 01.424-3.693c-1.373 2.503-2.846 4.551-4.42 6.146-1.574 1.595-3.26 2.876-5.056 3.845a20.46 20.46 0 01-5.691 2.059 31.01 31.01 0 01-6.146.605c-2.867 0-5.601-.525-8.204-1.574s-4.884-2.634-6.842-4.753c-1.958-2.119-3.533-4.762-4.723-7.932-1.191-3.168-1.786-6.912-1.786-11.231 0-5.53.827-10.817 2.482-15.863 1.655-5.045 4.208-9.496 7.659-13.351 3.451-3.854 7.85-6.942 13.199-9.264 5.348-2.321 11.736-3.481 19.163-3.481.969 0 2.28.071 3.936.212 1.655.142 3.37.324 5.146.545 1.776.222 3.481.475 5.116.757 1.635.283 2.896.566 3.784.848l-7.084 39.113a188.162 188.162 0 00-.727 4.783 145.832 145.832 0 00-.636 5.268 119.93 119.93 0 00-.424 5.237 79.546 79.546 0 00-.151 4.632c0 1.09.04 2.028.121 2.815.081.787.182 1.524.303 2.21h-9.443zm7.145-57.338c-1.332-.686-2.886-1.25-4.662-1.695-1.777-.444-3.855-.666-6.236-.666-3.391 0-6.772.696-10.142 2.089-3.371 1.393-6.398 3.481-9.082 6.267-2.685 2.785-4.865 6.267-6.539 10.444-1.675 4.178-2.513 9.073-2.513 14.683 0 2.785.323 5.338.969 7.659.645 2.322 1.553 4.339 2.725 6.055 1.17 1.716 2.583 3.068 4.238 4.057a10.307 10.307 0 005.389 1.483c2.543 0 4.935-.524 7.175-1.574a21.45 21.45 0 006.024-4.208c1.776-1.756 3.279-3.804 4.511-6.146a24.8 24.8 0 002.513-7.447l5.63-31.001z"/>
            <path id="logo_x5F_top_x5F_h" css={_item} d="M330.589 216.931h9.566l-5.994 34.512a88.6 88.6 0 015.601-2.573 53.2 53.2 0 015.358-1.907 39.121 39.121 0 015.328-1.181 37.712 37.712 0 015.51-.394c5.731 0 10.151 1.414 13.26 4.238 3.108 2.826 4.662 6.943 4.662 12.352 0 .848-.041 1.726-.121 2.634a34.46 34.46 0 01-.363 2.755l-7.689 44.441h-9.566l7.629-43.896c.242-1.453.363-2.805.363-4.057 0-3.43-.959-6.064-2.876-7.901-1.917-1.836-4.956-2.755-9.112-2.755-1.535 0-3.027.112-4.48.333a32.486 32.486 0 00-4.48 1.029 68.799 68.799 0 00-4.813 1.665 162.42 162.42 0 00-5.479 2.24l-9.203 53.342h-9.566l16.465-94.877z"/>
            <path id="logo_x5F_top_x5F_a3" css={_item} d="M428.736 311.808a78.196 78.196 0 01-.121-4.541c0-1.09.039-2.219.121-3.391.08-1.17.221-2.401.424-3.693-1.373 2.503-2.846 4.551-4.42 6.146-1.574 1.595-3.261 2.876-5.057 3.845s-3.693 1.655-5.691 2.059a31.008 31.008 0 01-6.145.605c-2.867 0-5.602-.525-8.205-1.574-2.604-1.049-4.884-2.634-6.842-4.753-1.958-2.119-3.533-4.762-4.723-7.932-1.191-3.168-1.786-6.912-1.786-11.231 0-5.53.827-10.817 2.482-15.863 1.655-5.045 4.208-9.496 7.659-13.351 3.451-3.854 7.85-6.942 13.199-9.264 5.349-2.321 11.736-3.481 19.164-3.481.969 0 2.279.071 3.936.212 1.654.142 3.369.324 5.146.545 1.775.222 3.48.475 5.115.757 1.635.283 2.896.566 3.785.848l-7.084 39.113a188.162 188.162 0 00-.727 4.783 145.825 145.825 0 00-.637 5.268 121.509 121.509 0 00-.424 5.237 79.479 79.479 0 00-.15 4.632c0 1.09.039 2.028.121 2.815.08.787.182 1.524.303 2.21h-9.443zm7.145-57.338c-1.332-.686-2.887-1.25-4.662-1.695-1.777-.444-3.855-.666-6.236-.666-3.391 0-6.772.696-10.143 2.089s-6.397 3.481-9.082 6.267-4.864 6.267-6.539 10.444c-1.675 4.178-2.513 9.073-2.513 14.683 0 2.785.323 5.338.969 7.659.645 2.322 1.553 4.339 2.725 6.055 1.17 1.716 2.583 3.068 4.239 4.057a10.305 10.305 0 005.389 1.483c2.543 0 4.934-.524 7.174-1.574a21.47 21.47 0 006.025-4.208c1.775-1.756 3.278-3.804 4.51-6.146a24.83 24.83 0 002.514-7.447l5.63-31.001z"/>
            <path id="logo_x5F_top_x5F_r" css={_item} d="M476.629 246.417v1.09c0 1.251-.092 2.705-.273 4.359a216.063 216.063 0 01-.695 5.57 37.12 37.12 0 014.752-4.844 34.088 34.088 0 015.662-3.905c2.018-1.11 4.146-1.938 6.387-2.482s4.551-.817 6.934-.817c.523 0 1.068.041 1.635.121.564.082.988.162 1.271.242l-3.814 9.99c-.646-.202-1.332-.333-2.059-.394s-1.555-.091-2.482-.091c-2.826 0-5.248.252-7.266.757-2.02.505-3.806 1.262-5.359 2.271a22.58 22.58 0 00-4.178 3.481c-1.231 1.312-2.189 2.715-2.875 4.208l-7.932 45.834h-9.566l10.051-58.125c.281-1.614.514-2.987.695-4.117.182-1.129.273-2.18.273-3.148h8.839z"/>
            <path id="logo_x5F_top_x5F_a4" css={_item} d="M544.744 311.808a78.196 78.196 0 01-.121-4.541c0-1.09.039-2.219.121-3.391.08-1.17.221-2.401.424-3.693-1.373 2.503-2.846 4.551-4.42 6.146-1.574 1.595-3.261 2.876-5.057 3.845s-3.693 1.655-5.691 2.059a31.008 31.008 0 01-6.145.605c-2.867 0-5.602-.525-8.205-1.574s-4.884-2.634-6.842-4.753-3.532-4.762-4.723-7.932c-1.19-3.168-1.785-6.912-1.785-11.231 0-5.53.826-10.817 2.482-15.863 1.654-5.045 4.207-9.496 7.658-13.351 3.451-3.854 7.851-6.942 13.199-9.264 5.349-2.321 11.736-3.481 19.164-3.481.969 0 2.279.071 3.936.212 1.654.142 3.369.324 5.146.545 1.775.222 3.48.475 5.115.757 1.635.283 2.896.566 3.785.848l-7.084 39.113a188.162 188.162 0 00-.727 4.783 145.825 145.825 0 00-.637 5.268 121.509 121.509 0 00-.424 5.237 79.479 79.479 0 00-.15 4.632c0 1.09.039 2.028.121 2.815.08.787.182 1.524.303 2.21h-9.443zm7.145-57.338c-1.332-.686-2.887-1.25-4.662-1.695-1.777-.444-3.855-.666-6.236-.666-3.391 0-6.772.696-10.143 2.089s-6.397 3.481-9.082 6.267-4.864 6.267-6.539 10.444-2.512 9.073-2.512 14.683c0 2.785.322 5.338.969 7.659.645 2.322 1.553 4.339 2.725 6.055 1.17 1.716 2.582 3.068 4.238 4.057a10.305 10.305 0 005.389 1.483c2.543 0 4.934-.524 7.174-1.574a21.47 21.47 0 006.025-4.208c1.775-1.756 3.278-3.804 4.51-6.146a24.83 24.83 0 002.514-7.447l5.63-31.001z"/>
            <path id="logo_x5F_top_x5F_dot" css={_item} d="M600.568 214.449l-6.963 25.188h-6.055l1.998-25.188h11.02z"/>
            <path id="logo_x5F_top_x5F_s" css={_item} d="M605.957 295.945a43.385 43.385 0 003.723 4.057c1.231 1.171 2.503 2.149 3.814 2.937s2.704 1.383 4.178 1.786c1.474.404 3.098.605 4.875.605 2.018 0 3.985-.251 5.902-.757 1.917-.504 3.623-1.231 5.117-2.18 1.492-.948 2.693-2.128 3.602-3.542.908-1.413 1.363-3.027 1.363-4.844 0-1.493-.264-2.764-.787-3.814a9.728 9.728 0 00-1.998-2.725 11.081 11.081 0 00-2.756-1.907 34.041 34.041 0 00-2.996-1.302l-1.695-.636c-.809-.303-1.676-.636-2.604-.999l-2.635-1.029a65.637 65.637 0 01-1.664-.666 77.458 77.458 0 01-4.693-1.938 21.552 21.552 0 01-4.783-2.937c-1.474-1.19-2.715-2.654-3.723-4.39-1.01-1.735-1.514-3.854-1.514-6.357 0-3.551.746-6.579 2.24-9.082a18.797 18.797 0 015.873-6.146c2.422-1.594 5.146-2.775 8.174-3.542a36.9 36.9 0 019.082-1.15c4.156 0 7.88.566 11.17 1.695 3.29 1.13 6.207 3.128 8.75 5.994l-6.236 6.176a39.055 39.055 0 00-3.148-2.846 16.904 16.904 0 00-3.209-2.028 16.248 16.248 0 00-3.693-1.241c-1.332-.282-2.887-.424-4.662-.424a24.66 24.66 0 00-5.207.575c-1.777.384-3.382.99-4.814 1.816a10.904 10.904 0 00-3.541 3.239c-.93 1.332-1.393 2.967-1.393 4.904 0 1.251.281 2.361.848 3.33.564.969 1.321 1.827 2.27 2.573a16.396 16.396 0 003.24 1.968 38.002 38.002 0 003.754 1.514c1.574.566 2.986 1.081 4.238 1.544 1.25.464 2.684.999 4.299 1.604a47.897 47.897 0 014.812 2.119 17.422 17.422 0 014.27 3.027c1.25 1.211 2.26 2.685 3.027 4.42.766 1.736 1.15 3.835 1.15 6.297 0 3.593-.778 6.721-2.332 9.385s-3.582 4.874-6.084 6.63c-2.504 1.756-5.328 3.058-8.477 3.905s-6.318 1.271-9.506 1.271c-2.664 0-5.077-.233-7.236-.696s-4.146-1.15-5.963-2.059-3.492-2.018-5.025-3.33c-1.535-1.311-3.027-2.815-4.48-4.511l7.083-6.293z"/>
        </g>
        <path fill="none" d="M1197.732 176.234h9v4.5h-9z"/>
    </svg>
  )
}

export const Logo = memo(ElementLogo);

const _logo = () => css`
    ${sp`
        width: 100%;
    `}
    ${pc`
        width: 400px;
    `}
`

const _item = () =>css`
    ${sp`
        fill: #FFF;                     /*塗りつぶし色*/
        stroke-width: 2;                  /*線の太さ*/
        stroke-dasharray: 2500;           /*線の間隔*/
        stroke-dashoffset: 0;             /*線の始まりの開始位置*/
        animation-name: ${_animate()};       /*keyframe名*/
        animation-duration: 3s;           /*所要時間*/
        animation-timing-function: linear;
    `}
    ${pc`
        fill: #000;                     /*塗りつぶし色*/
        stroke-width: 2;                  /*線の太さ*/
        stroke-dasharray: 2500;           /*線の間隔*/
        stroke-dashoffset: 0;             /*線の始まりの開始位置*/
        animation-name: ${_animate()};       /*keyframe名*/
        animation-duration: 3s;           /*所要時間*/
        animation-timing-function: linear;
    `}
`

const _em = (theme:Theme) => css`
  ${sp`
      composes: logo_item;
      fill: ${theme.colors.accent};
      animation-delay: 0.5s;
  `}
  ${pc`
      composes: logo_item;
      fill: ${theme.colors.primary};
      animation-delay: 0.5s;
  `}
`

const _animate = () => keyframes`
  0% {
    fill: #fff;                     /*塗りつぶし色*/
    stroke-dashoffset: 2500;          /*線の始まりの開始位置*/
    stroke: #000;                   /*パスの色*/
  }
  80% {
    fill: #fff;                     /*塗りつぶし色*/
  }
  100% {
    stroke-dashoffset: 0;             /*線の始まりの開始位置*/
    stroke: #FFF;                  /*パスの色*/
  }
`