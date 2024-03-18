import { style } from '@vanilla-extract/css';

import { flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

export const errorWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({ width: 'full', height: 'full' }),
]);

export const errorMessage = style([sprinkles({ fontSize: '2x' })]);
