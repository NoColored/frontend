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
  'bronze',
  'silver',
  'gold',
  'platinum',
  'diamond',
  'colored',
  'rgb',
  'origin',
] as const;
