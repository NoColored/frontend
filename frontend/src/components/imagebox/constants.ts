export const IMAGEBOX_SIZE = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'full',
] as const;

export const IMAGEBOX_SIZE_PIXEL = {
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

export const BACKGROUND_COLOR = ['white'] as const;
export const BORDER_WEIGHT = ['1x', '5x'] as const;

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

export const TIER_INFO_1 = [
  { tier: 'nocolored', description: '노컬러드', score: 'NPC' },
  { tier: 'bronze', description: '브론즈', score: '기본' },
  { tier: 'silver', description: '실버', score: '~3000점' },
  { tier: 'gold', description: '골드', score: '~3500점' },
  { tier: 'platinum', description: '플래티넘', score: '~4200점' },
] as const;

export const TIER_INFO_2 = [
  { tier: 'diamond', description: '다이아몬드', score: '~5000점' },
  { tier: 'colored', description: 'Colored', score: '상위 20등' },
  { tier: 'rgb', description: 'RGB', score: '상위 5등' },
  { tier: 'origin', description: 'The Origin', score: '1등' },
] as const;
