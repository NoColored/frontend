import { style } from '@vanilla-extract/css';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const playerInfoWrapper = style([
  flexOptions({ option: 'rowCenter' }),
  sprinkles({
    position: 'relative',
    paddingX: '1x',
  }),
]);

export const imageWrapper = style([
  sprinkles({
    marginX: '2x',
  }),
]);
