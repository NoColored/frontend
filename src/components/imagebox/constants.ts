export const IMAGEBOX_SIZE = {
  xsmall: '32px',
  small: '48px',
  medium: '96px',
  large: '144px',
  xlarge: '240px',
  full: '100%',
} as const;

export const BORDER_COLOR = [
  'red',
  'yellow',
  'green',
  'blue',
  'pink',
  'black',
] as const;

export const BACKGROUND_COLOR = ['white', 'gray200'] as const;
export const BORDER_WEIGHT = ['1x', '3x', '5x'] as const;

export const TIER_RANGE = [
  'nocolored',
  'bronze',
  'silver',
  'gold',
  'platinum',
  'diamond',
  'colored',
  'rgb',
  'origin',
] as const;

export const LOW_TIER_INFO = {
  nocolored: { description: '노컬러드', score: 'NPC' },
  bronze: { description: '브론즈', score: '~2100점' },
  silver: { description: '실버', score: '~2700점' },
  gold: { description: '골드', score: '~3400점' },
  platinum: { description: '플래티넘', score: '~4200점' },
} as const;

export const HIGH_TIER_INFO = {
  diamond: { description: '다이아몬드', score: '4201점 이상' },
  colored: { description: 'Colored', score: '상위 10등' },
  rgb: { description: 'RGB', score: '상위 5등' },
  origin: { description: 'The Origin', score: '1등' },
} as const;
