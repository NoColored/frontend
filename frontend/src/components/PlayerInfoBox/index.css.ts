import { style } from '@vanilla-extract/css';

import { flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

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
