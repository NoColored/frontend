export const ROUNDCORNER_IMAGEBOX_SIZE = {
  small: '96px',
  large: '144px',
} as const;

export const TIER_RANGE = [
  'bronze',
  'silver',
  'gold',
  'platinum',
  'diamond',
  'colored',
  'rgb',
  'origin',
] as const;

export const BORDER_COLOR = {
  red: 'redDark',
  yellow: 'yellowDark',
  green: 'greenDark',
  blue: 'blueDark',
  pink: 'pinkDark',
  black: 'black',
} as const;

export const BACKGROUND_COLOR = ['white'] as const;

// border가 있을 경우 기본적으로 5x -> 옵션 줬을때만 1x
export const BORDER_WEIGHT = ['1x'] as const;
