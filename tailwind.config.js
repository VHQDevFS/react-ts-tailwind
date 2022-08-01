/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
// const daisyui = require('daisyui')
// const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src//*.{js,ts,jsx,tsx}', './src/components//*.{js,ts,jsx,tsx}'],
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    extend: {
      keyframes: {
        overlay: {
          '0%': { transform: 'scaleX(0)', 'transform-origin': 'left' },
          '100%': { transform: 'scaleX(1)', 'transform-origin': 'left' },
        },
      },

      animation: {
        overlay: '.3s linear overlay',
      },

      aspectRatio: {
        '4.6/1': 'auto 4.6/1',
        '4_3': 'auto 4/3',
        '3_2': 'auto 3/2',
        '16_9': 'auto 16/9',
      },
    },
    screens: {
      xs: '577px',
      // => @media (min-width: 576px) { ... }

      sm: '641px',
      // => @media (min-width: 640px) { ... }

      md: '769px',
      // => @media (min-width: 768px) { ... }

      lg: '1025px',
      // => @media (min-width: 1024px) { ... }

      xl: '1281px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1537px',
      // => @media (min-width: 1536px) { ... }

      max2Xl: { max: '1536px' },
      maxXl: { max: '1280px' },
      maxLg: { max: '1024px' },
      maxSlg: { max: '875px' },
      maxMd: { max: '768px' },
      maxSm: { max: '640px' },
      maxXs: { max: '576px' },
      maxXxs: { max: '430px' },
      max375: { max: '375px' },
    },
    fontFamily: {
      // sans: ['Barlow', ...defaultTheme.fontFamily.sans],
      // serif: ['Barlow', ...defaultTheme.fontFamily.serif],
      // barlow: 'Barlow, sans-serif',
    },
    boxShadow: ({ boxShadow }) => ({
      ...boxShadow,
      // root: '0px 0px 25px rgba(0, 0, 0, 0.25)',
      // input: '0px 2px 10px #E2EBF5',
      // button: '0px 2px 10px #E2EBF5',
      // card: '0px 2px 10px rgba(9, 14, 30, 0.08)',
    }),
    colors: ({ colors }) => ({
      ...colors,
    }),

    backgroundColor: ({ theme }) => ({
      ...theme('colors'),
      // primary: '#05161F',
      // turquoise: '#015C7B',
      // darkBlue: '#05161F'
    }),
    zIndex: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
      80: 80,
      90: 90,
      100: 100,
      auto: 'auto',
    },
  },
  variants: {
    extend: {
      // display: ['group-hover'],
      // visibility: ['group-hover'],
    },
  },

  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.container-w-1440': {
          'max-width': '1440px',
          margin: '0 auto',
        },

        '.container-w-1200': {
          'max-width': '1200px',
          margin: '0 auto',
        },
        '.text-main': {
          'font-size': '15px',
        },
        '.text-small': {
          'font-size': '14px',
        },
        '.border-base': {
          border: 'solid borderColor',
        },
        '.border-bottom': {
          'border-bottom': '1px solid borderColor',
        },
        '.rounded-circle': {
          'border-radius': '50%',
        },
      });
    }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
};
