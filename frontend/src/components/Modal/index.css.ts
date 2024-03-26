import { style } from '@vanilla-extract/css';

import * as constants from './constants';

import { borderDarkOptions, flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const modal = style([
  sprinkles({
    margin: 'auto',
    padding: constants.MODAL_PADDING,
    borderRadius: '2x',
    position: 'relative',
  }),
  borderDarkOptions({ width: '1x', color: 'black' }),
  {
    minHeight: constants.MIN_MODAL_HEIGHT,
    width: constants.MODAL_WIDTH,
    maxHeight: constants.MAX_MODAL_HEIGHT,
  },
]);

export const content = style([
  flexOptions({ option: 'columnCenter' }),
  { width: constants.MODAL_INNER_WIDTH },
]);
