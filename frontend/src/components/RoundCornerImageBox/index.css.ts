import { style } from '@vanilla-extract/css';

import { borderOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

export const imageBox = style([
  borderOptions({ color: 'black', width: '2x' }),
  sprinkles({
    borderRadius: '2x',
  }),
]);
