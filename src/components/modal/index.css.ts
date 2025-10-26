import { style } from '@vanilla-extract/css';

import * as constants from './constants';

import { borderDarkOptions, flexOptions, sprinkles } from '@/shared/styles';

export const modal = style([
  sprinkles({
    borderRadius: '2x',
    paddingY: constants.MODAL_PADDING,
    paddingX: '4x',
    position: 'fixed',
  }),
  borderDarkOptions({ width: '1x', color: 'black' }),
  {
    '@media': {
      'screen and (max-height: 370px)': {
        padding: '18px',
      },
    },
    width: constants.MODAL_WIDTH,
    maxHeight: constants.MAX_MODAL_HEIGHT,
    top: '50%',
    left: '50%',
    translate: '-50% -50%',

    selectors: {
      '&::backdrop': {
        background: 'rgba(0, 0, 0, 0.4)',
      },
    },
  },
]);

export const content = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({
    width: 'full',
  }),
]);
