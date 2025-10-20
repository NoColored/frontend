export const BUTTON_COLOR = [
  'red',
  'yellow',
  'green',
  'blue',
  'pink',
  'navy',
  'gray300',
] as const;

export const BUTTON_COLOR_DARK = {
  red: 'redDark',
  yellow: 'yellowDark',
  green: 'greenDark',
  blue: 'blueDark',
  pink: 'pinkDark',
  navy: 'navyDark',
  gray300: 'gray500',
} as const;

export const COLORED_ICON_BUTTON_SIZE_PIXEL = {
  medium: {
    width: '163px',
    height: '88px',
  },
  large: {
    width: '190px',
    height: '96px',
  },
  xlarge: {
    width: '292px',
    height: '140px',
  },
} as const;

export const COLORED_ICON_BUTTON_ICON_SIZE = '40px';

export const COLORED_BUTTON_SIZE_PIXEL = {
  xsmall: {
    width: '64px',
    height: '24px',
  },
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
