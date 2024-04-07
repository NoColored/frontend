import { calc } from '@vanilla-extract/css-utils';

export const BUTTON_GAP = '8px';

export const CHARACTER_SIZE_HEGITH = {
  MAX: '240px',
  MIN: '180px',
};

export const TOP_CONTENTS_WRAPPER_HEIGHT_MAX = calc.subtract(
  '100%',
  CHARACTER_SIZE_HEGITH.MAX,
);

export const TOP_CONTENTS_WRAPPER_HEIGHT_MIN = '80px';

export const BOTTOM_CONTENTS_WRAPPER_HEIGHT = calc.subtract(
  '100%',
  TOP_CONTENTS_WRAPPER_HEIGHT_MAX,
);

export const SIGNUP_BANNER_IMAGE =
  '/images/character/character-default-sunglass-yellow-h240w240.png';

export const SIGNUP_BANNER_TEXT = '★스킨★\n받는 법은?';
export const SIGNUP_BANNER = {
  HEIGHT: '50%',
  MIN_HEIGHT: '150px',
  RIGHT: '10px',
  TOP: '10px',
};
