import { style } from '@vanilla-extract/css';

import * as constants from './constants.ts';

import { borderOptions, flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

export const modal = style([
  sprinkles({
    margin: 'auto',
    padding: '8x',
    borderRadius: '2x',
  }),
  borderOptions({ width: '1x', color: 'black' }),
  {
    minHeight: constants.MIN_MODAL_HEIGHT,
    minWidth: constants.MIN_MODAL_WIDTH,
    maxHeight: constants.MAX_MODAL_HEIGHT,
    maxWidth: constants.MAX_MODAL_WIDTH,
  },
]);

export const content = style([flexOptions({ option: 'columnCenter' })]);
