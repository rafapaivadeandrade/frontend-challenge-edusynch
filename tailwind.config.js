/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      basexl: '1.15rem',
      xl: '1.25rem',
      lxl: '1.375rem',
      '1xl': '1.5rem',
      '2xl': '1.563rem',
      '2lxl': '1.75rem',
      '2.5xl': '1.8rem',
      '3xl': '1.953rem',
      '3.5xl': '1.90rem',
      // eslint-disable-next-line no-dupe-keys
      '3.5xl': '2.153rem',
      '4xl': '2.441rem',
      '4.5xl': '2.7rem',
      '5xl': '2.9rem',
      '5.5xl': '3.4rem',
      '5x.7xl': '3.6rem',
      '6xl': '3.75rem',
      '6.5xl': '4.1rem',
      '7xl': '4.5rem',
      '7.3xl': '4.9rem',
      '7.5xl': '5.5rem',
      '8xl': '5.9rem',
      '8.15xl': '6rem',
      '8.20xl': '6.8rem',
      '8.25xl': '7rem',
      '8.5xl': '7.5rem',
      '9xl': '8rem',
      '9.5xl': '8.56rem',
      '9.8xl': '8.8rem',
      '10xl': '9rem',
      '11xl': '10rem',
      '13.6xl': '12.6rem',
    },
    letterSpacing: {
      tightest: '-.085em',
      tighter: '-.05em',
      tighter2: '-.04em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      header: '6px',
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      borderWidth: {
        1: '1px',
      },
      gap: {
        0.5: '0.10rem',
        17: '4.5rem',
        22: '5.5rem',
        13: '3.375rem',
      },
      lineHeight: {
        10.5: '2.75rem',
        11: '3rem',
        11.5: '3.5rem',
        12: '4rem',
        13: '5rem',
        14: '6rem',
        15: '7rem',
        31: '9rem',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      width: {
        0.5: '0.15rem',
        500: '31.25rem',
        950: '59.375rem',
        '1/5.5': '18%',
        '1/5.2': '19.4%',
        '1/4.87': '20.75%',
        '1/4.5': '22%',
        '1/3.3': '30%',
        '1/3.7': '37.33%',
        '2/2.9': '65%',
        '2/47': '42.7%',
        '2/5.8.5': '48.5%',
        '2/5.9': '49%',
        '7/11.5': '59.5%',
        '2/2.8': '72%',
        '2/2.6': '74%',
        '2/2.5': '79%',
        '2/2.4': '83.3%',
        '2/2.2': '87.5%',
        '10/11.54': '86.66%',
        '11/11.7': '94%',
        '11/11.45': '96.72%',
        '11/11.20': '98%',
        '11/10.6': '103.75%',
        '11/9.8': '112.22%',
      },
      height: {
        0.5: '0.10rem',
        100: '448px',
      },
      backgroundColor: {},
      colors: {
        Primary: '#FBAB34',
        Secondary: '#8C8A97',
        Terciary: '#1BD171',
        Quaternary: '#EC3237',
        TextBase: '#5D6670',
        background: '#FFF6E8',
        TerciaryButton: '#149E55',
        NewsletterText: '#FFE1B5',
        ModalText: '#8C8A97',
        Eye: '#E0DEEA',
        Dashboard: '#F9F9F9',
        Balance: '#FFF6E8',
        Green: '#149E55',
        Yellow: '#FFB94F',
        Border: '#F4F3F8',
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1194px', min: '835px' },
      // => @media (max-width: 1194px) { ... }

      lg: { max: '834px', min: '431px' },
      // => @media (max-width: 834px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      xsm: { max: '600px' },
      // => @media (max-width: 600px) { ... }

      xxsm: { max: '430px' },
      // => @media (max-width: 430px) { ... }

      minxxsm: { min: '431px' },
      // => @media (min-width: 431px) { ... }

      minsm: { min: '640px' },
      // => @media (min-width: 640px) { ... }

      minmd: { min: '768px' },
      // => @media (min-width: 768px) { ... }

      minlg: { min: '431px' },
      // => @media (min-width: 1024px) { ... }

      minxl: { min: '1280px' },
      // => @media (min-width: 1280px) { ... }

      min2xl: { min: '1195px' },
      // => @media (min-width: 1536px) { ... }

      min3xl: { min: '1535px' },
      // => @media (max-width: 1535px) { ... }
    },
  },
  plugins: [],
};
