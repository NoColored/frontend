import { style } from '@vanilla-extract/css';

import * as constants from './constants.ts';

import { borderDarkOptions, flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

export const modal = style([
  sprinkles({
    margin: 'auto',
    padding: '8x',
    borderRadius: '2x',
  }),
  borderDarkOptions({ width: '1x', color: 'black' }),
  {
    minHeight: constants.MIN_MODAL_HEIGHT,
    width: constants.MODAL_WIDTH,
    maxHeight: constants.MAX_MODAL_HEIGHT,
  },
]);

export const content = style([flexOptions({ option: 'columnCenter' })]);
