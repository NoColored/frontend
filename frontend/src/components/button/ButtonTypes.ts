// 색상 값들을 상수로 정의
export const ICON_COLOR_VALUES = [
  'red',
  'yellow',
  'green',
  'blue',
  'pink',
  'navy',
] as const;

export const ICON_COLOR_DARK_VALUES = {
  red: 'redDark',
  yellow: 'yellowDark',
  green: 'greenDark',
  blue: 'blueDark',
  pink: 'pinkDark',
  navy: 'navyDark',
} as const;

export interface ColorButtonColors {
  color: (typeof ICON_COLOR_VALUES)[number];
}
