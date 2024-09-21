import { defineConfig } from "@pandacss/dev";
// import { delay } from "framer-motion";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./component/**/Logo.{js,jsx,ts,tsx}",
    "./component/SectionWrap.{js,jsx,ts,tsx}",
    "./component/SkillLists.tsx",
    "./component/Loading.tsx",
    "./component/Navigation.tsx",
    "./component/WorkLists.tsx"
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        md: '768px',
      },
      keyframes: {
        svgAnimate: {
          '0%': {
            fill: '#fff',
            strokeDashoffset: '2500',
            stroke: '#000'
          },
          '80%': {
            fill: '#FFF'
          },
          '100%': {
            strokeDashoffset: '0',
            stroke: '#FFF'
          }
        },
        loadingAnimate: {
          '33%': {
            translate: '0 10px',
          },
          '66%': {
            translate: '0 -10px'
          },
          '100%': {
            translate: '0'
          }
        },
        navigationAnimate: {
          '0%,100%': {
            scale: '1'
          },
          '30%': {
            translate: '0 -25%'
          },
          '50%': {
            scale: '1'
          },
          '90%': {
            translate: '0 0',
            scale: '1.2 0.8'
          }
        }
      },
      tokens: {
        assets: {
          illustBack: {
            value: { type: 'url', value: '/img/illust_back.svg' }
          },
        },
        colors: {
          main: { value: '#3589BB' },
          accent: { value: '#FFB83F' }
        },
        sizes: {
          minPC: { value: '1280px' },
          contPC: { value: '920px' }
        }
      }
    },
  },

  patterns: {
    extend: {
      listAnimation: {
        description: 'sp navigation opened start animation',
        defaultValues: {
          index: 0,
        },
        properties: {
          index: { type: 'number'}
        },
        transform(props) {
            const { index, ...rest } = props
            const delayValue = 0.3 -((index + 1) * 0.06);
            const positionValue = 42 - (index * 18);
            return {
              animation: 'navigationAnimate',
              animationDuration: '.4s',
              animationDelay: `${delayValue}s`,
              bottom: `${positionValue}vw`,
              right: `${positionValue}vw`,
              md: {
                animation: 'none'
              },
              ...rest
            }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});
