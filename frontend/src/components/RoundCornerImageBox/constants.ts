export const ROUNDCORNER_IMAGEBOX_SIZE = [
  'small',
  'medium',
  'large',
  'full',
] as const;

export const ROUNDCORNER_IMAGEBOX_SIZE_PIXEL = {
  small: '48px',
  medium: '96px',
  large: '144px',
  full: '100%',
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

// 타입 관리가 안돼서 두 개씩 선언함
// 객체를 선언했을때 forEach로 돌리면 string타입으로 인식 -> 오류남.
export const BORDER_COLOR = [
  'red',
  'yellow',
  'green',
  'blue',
  'pink',
  'black',
] as const;

export const BACKGROUND_COLOR = ['white'] as const;

// border가 있을 경우 기본적으로 5x -> 옵션 줬을때만 1x
export const BORDER_WEIGHT = ['1x', '5x'] as const;
