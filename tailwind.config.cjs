/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fill: {
      violet500: '#8b5cf6'
    },
    colors: {
      topBar: '#14161B',
      grayWhite: '#616161',
      zinc900: 'rgb(24 24 27)',
      zinc700: 'rgb(63 63 70)',
      grayOpacity: "rgba(255, 255, 255, 0.6)",
      white: "rgb(255 255 255)",
      red500: 'rgb(239 68 68)',
      indigo500: 'rgb(99 102 241)',
      fuchsia500: 'rgb(217 70 239)',
      gray200: 'rgb(229 231 235)',
      gray400: 'rgb(156 163 175)',
      gray500: 'rgb(107 114 128)',
      gray800: 'rgb(31 41 55)',
      gray700: 'rgb(55 65 81)',
      textNav: '#14161B',
      black: 'rgb(0 0 0)',
      whiteSmall: '#fff',
      whitexs: '#FFFFFFCC',
      whitePurple: '#6345ED',
      colorFooter: '#5831c5',
      purple400: 'rgb(192 132 252)'

    },
    backgroundColor: {
      bgInputFooter: '#d4c5ff',
      bgButtonFooter: '#5831c5',
      bgCallCenter: '#a066ff',
      bgAccounts: 'rgba(99, 69, 237, 0.07)',
      gray200: 'rgb(229 231 235)',
      gray300: 'rgb(209 213 219)',
      zinc900: 'rgb(24 24 27)',
      zinc700: 'rgb(63 63 70)',
      whiteLight: '#fff',
      navBarBlack: '#06060e',
      bgButtonTopBar: "rgba(255, 255, 255, 0.1)",
      bgSearchBar: 'rgba(255, 255, 255, 0.07)',
      transparent: 'transparent',
      lime700: "rgb(77 124 15)",
      body: '#0e0e0f',
      grayTopBar: '#343444',
      whiteTopBar: '#F9F9F9',
      bgSelect: '#5e5e74a1',
      white: 'rgb(255 255 255)',
      bgDetail: '#14161B',
      mobileNav: '#14141F',
      none: 'none',
      create: '#222232',
      whiteInputs: '#6345ED12',
      bgPurple: '#6345ED',
      bg404Dark: '#414142c0',
      bgModal: '#ebe8e8d4',
      modalDark: '#080808ad',
      bgFooter: '#030303',
    },
    backgroundImage: {
      bgGradientBanner: 'linear-gradient(130.35deg,rgba(99, 69, 237, 0.85) 17.35%,rgba(220, 57, 252, 0.85) 78.23%) ',
      gradientButtonFilter: 'linear-gradient(to left, #6345ED 58.12%, #DC39FC 81.74%)',
      bgSubmitCollection: 'linear-gradient(to left,#6345ed 58.12%,#dc39fc 81.74%)',
      bgCounter: 'linear-gradient(130.35deg, #6345ed 17.35%, #dc39fc 78.23%)',
      bgImageCollection: "url('./src/assets/bg-page-title.jpg')",
      bgImageLogin: "url('./src/assets/img-login.jpg')",
      bgContainerImageCollection: "url('./src/assets/img-create-item.jpg')",
      bgSlider: "url('./src/assets/img-slider-1.png')",
      landingdark: 'linear-gradient(90deg, rgba(20,20,20,0.09287464985994398) 0%, rgba(18,17,17,0.2861519607843137) 48%)',
      selectBG: '-webkit-linear-gradient(#5e5e74a1,#5e5e74a1 40%,#5e5e74a1)',
      bgGradientAccount: 'linear-gradient(132.41deg, #6345ED 18.03%, #DC39FC 81.29%)',
      mobileNav: '#14141F',

    },
    backgroundSize: {
      bgSizeSubmitCollection: '200% auto'
    },
    borderColor: {
      zinc800: 'rgb(39 39 42)',
      borderInput: 'rgba(99, 69, 237, 0.1)',
      whiteBorderInput: 'rgba(20, 22, 27, 0.12)',
      borderNavMobile: 'rgba(138, 138, 160, 0.3)',
      borderSearchBar: 'rgba(255, 255, 255, 0.12)',
      cardCollection: 'rgba(255, 255, 255, 0.15)',
      white: 'rgb(255 255 255)',
      gray200: 'rgb(229 231 235)',
      table: 'rgb(73, 73, 73)',
      purple: '#6345ed',
      footerBorder: 'rgba(255, 255, 255, 0.1)'
    },
    boxShadow: {
      shadowButtonTopBar: "4px 4px 30px rgba(99, 69, 237, 0.1)",
      shadowFilters: '4px 4px 60px rgba(99, 69, 237, 0.15)',
      cardCollection: '1.7px 2.4px 1.9px -5px rgba(0, 0, 0, 0.077),3.9px 5.3px 4.2px -5px rgba(0, 0, 0, 0.11),7.6px 10.5px 8.2px -5px rgba(0, 0, 0, 0.143),24px 33px 26px -5px rgba(0, 0, 0, 0.22);'
    },
    gridTemplateColumns: {
      footer: '1fr 1fr 1fr',
      footerBidzen: '1fr 1fr 1fr 1fr',
      footer2columns: '1fr 1fr'
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}