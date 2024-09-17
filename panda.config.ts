import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./component/**/Logo.{js,jsx,ts,tsx}",
    "./component/**/SectionWrap.{js,jsx,ts,tsx}",
    "./component/SkillLists.tsx",
    "./component/Loading.tsx"
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
          minPC: { value: '1280px' }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
