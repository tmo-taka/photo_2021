import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./component/**/Logo.{js,jsx,ts,tsx}"],

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
        }
      },
      tokens: {
        colors: {
          main: { value: '#3589BB' },
          accent: { value: '#FFB83F' }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
