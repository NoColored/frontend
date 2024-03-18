import { style } from '@vanilla-extract/css';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const playerInfoWrapper = style([
  flexOptions({ option: 'rowCenter' }),
  sprinkles({
    width: 'auto',
    height: 'auto',
    position: 'relative',
    paddingY: '1x',
    paddingX: '1x',
  }),
]);

export const imageboxWrapper = style([
  sprinkles({
    marginX: '2x',
    marginY: '1x',
  }),
]);
