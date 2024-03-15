export const COLOR = [
  'red',
  'yellow',
  'green',
  'blue',
  'pink',
  'navy',
  'gray300',
] as const;

export const COLOR_DARK = {
  red: 'redDark',
  yellow: 'yellowDark',
  green: 'greenDark',
  blue: 'blueDark',
  pink: 'pinkDark',
  navy: 'navyDark',
  gray300: 'gray500',
} as const;

export const SIZE_PIXEL = {
  small: {
    width: '96px',
    height: '36px',
  },
  medium: {
    width: '130px',
    height: '44px',
  },
  large: {
    width: '192px',
    height: '64px',
  },
} as const;
