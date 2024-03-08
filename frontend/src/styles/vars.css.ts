import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
    /* paddings, margins 대신 space 사용 */
    space: {
        none: '0',
        '0.5x': '4px',
        '1x': '8px',
        '2x': '16px',
        '3x': '24px',
        '4x': '32px',
        '5x': '40px',
    },

    colors: {
        white: '#ffffff',
        black: '#000000',
        red: '#F21F0C',
        redDark : '#B6190A',
        yellow: '#F2B705',
        yellowDark: '#B68A05',
        green: '#4CA732',
        greenDark: '#397D26',
        blue: '#04B1D9',
        blueDark: '#0386A4',
        pink: '#EB4180',
        pinkDark: '#B13161',
        navy: '#201D35',
        navyDark: '#141221',
        gray: '#808080',
        gray300: '#979797',
        gray500: '#727272',
        gray700: '#605F5F',

        // 이하 기타 색들
        lightGray: '#CDCDCD',
        whitesmoke: '#f1f1f1',
        babyBlue: '#BFCDE5',
        emerald: '#74cf9c',
        purple: '#cf8abc',
        oatmeal: '#fdf5e4',
        brown: '#453216',
        strongRed: '#E8635C',
        lightBlue: '#8AAEF9',
        lavender: '#BBA4DA',
    },

    borderRadius: {
        '0x': '0px',
        '1x': '8px',
        '2x': '16px',
        '3x': '24px',
        '4x': '32px',
        '5x': '40px',
        top: '32px 32px 0 0',
        full: '9999px', // 원을 만들 때 사용
    },

    fontFamily: {
        body: 'Arial',
    },

    fontSize: {
        '1x': '8px',
        '1.5x': '12px',
        '2x': '16px',
        '3x': '24px',
        '4x': '32px',
        '5x': '40px',
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