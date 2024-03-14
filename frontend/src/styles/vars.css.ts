import { createGlobalTheme } from '@vanilla-extract/css';

import {
  loadingNumFont,
  loadingTextFont,
  numFont,
  textFont,
} from '@/styles/font.css.ts';

export const vars = createGlobalTheme(':root', {
  size: {
    full: '100%',
  },

  /* paddings, margins 대신 space 사용 */
  space: {
    auto: 'auto',
    none: '0',
    '0.5x': '2px',
    '1x': '4px',
    '2x': '8px',
    '3x': '12px',
    '4x': '16px',
    '8x': '32px',
  },
  display: {
    flex: 'flex',
    block: 'block',
    inlineBlock: 'inline-block',
    inline: 'inline',
  },
  position: {
    relative: 'relative',
    absolute: 'absolute',
    fixed: 'fixed',
  },

  justifyContent: {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
    spaceBetween: 'space-between',
    spaceAround: 'space-around',
  },
  alignItems: {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline',
  },
  flexDirection: {
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse',
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    red: '#F21F0C',
    redDark: '#B6190A',
    yellow: '#F2B705',
    yellowDark: '#B68A05',
    green: '#4CA732',
    greenDark: '#397D26',
    blue: '#04B1D9',
    blueDark: '#0386A4',
    pink: '#EB4180',
    pinkDark: '#B13161',
    navy: '#201D35',
    navyDark: '#413F53',
    gray: '#808080',
    gray100: '#ebebeb',
    gray200: '#dddddd',
    gray300: '#979797',
    gray500: '#727272',
    gray700: '#605F5F',
    background: 'rgba(255, 255, 255, 0.8)',
  },

  // shadow사용법 확인하기
  shadow: {
    colorButtonShadow: '0 5 0 0',
  },

  borderStyle: {
    solid: 'solid',
    none: 'none',
  },

  borderRadius: {
    '1x': '4px',
    '2x': '8px',
    '4x': '16px',
    full: '50%', // 원을 만들 때 사용
  },
  borderWidth: {
    '1x': '1px',
    '2x': '2px',
    '3x': '3px',
    '4x': '4px',
    '5x': '5px',
  },

  fontFamily: {
    textFont,
    numFont,
    loadingTextFont,
    loadingNumFont,
  },

  fontSize: {
    '0.5x': '8px',
    '0.75x': '12px',
    '1x': '16px',
    '1.25x': '20px',
    '1.5x': '24px',
    '2x': '32px',
    '5x': '80px',
  },

  fontWeight: {
    normal: '400',
    accent: '700',
  },

  // lineHeight 는 필요할 때 사용
  lineHeight: {},

  zIndex: {
    'alert-content': '3001',
    'alert-bg': '3000',
    'content-to-top': '2001',
    'content-bg-to-top': '2000',
    'layout-content': '1000',
    'z-5': '5',
    'z-4': '4',
    'z-3': '3',
    'z-2': '2',
    'z-1': '1',
  },
});
