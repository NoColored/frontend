import { style } from '@vanilla-extract/css';

import * as constants from './constants';

import { borderDarkOptions, flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const modal = style([
  sprinkles({
    margin: 'auto',
    borderRadius: '2x',
    padding: constants.MODAL_PADDING,
    position: 'relative',
  }),
  borderDarkOptions({ width: '1x', color: 'black' }),
  {
    '@media': {
      'screen and (max-height: 370px)': {
        padding: '18px',
      },
    },
    minHeight: constants.MIN_MODAL_HEIGHT,
    width: constants.MODAL_WIDTH,
    maxHeight: constants.MAX_MODAL_HEIGHT,
  },
]);

export const content = style([
  flexOptions({ option: 'columnCenter' }),
  {
    '@media': {
      'screen and (max-height: 365px)': {
        margin: 'auto',
        marginTop: '16px',
      },
    },
    width: constants.MODAL_INNER_WIDTH,
  },
]);
