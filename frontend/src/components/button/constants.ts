export const COLOREDICONBUTTON_COLOR = [
  'red',
  'yellow',
  'green',
  'blue',
  'pink',
  'navy',
  'gray300',
] as const;

export const COLOREDICONBUTTON_COLOR_DARK = {
  red: 'redDark',
  yellow: 'yellowDark',
  green: 'greenDark',
  blue: 'blueDark',
  pink: 'pinkDark',
  navy: 'navyDark',
  gray300: 'gray500',
} as const;

export const COLOREDICONBUTTON_SIZE = ['medium', 'large', 'xlarge'] as const;

export const COLOREDICONBUTTON_SIZE_PIXEL = {
  medium: {
    width: '163px',
    height: '96px',
  },
  large: {
    width: '190px',
    height: '96px',
  },
  xlarge: {
    width: '292px',
    height: '120px',
  },
} as const;

export const COLOREDICONBUTTON_ICON_SIZE = '40px';
