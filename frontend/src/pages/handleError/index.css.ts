import { style } from '@vanilla-extract/css';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const errorWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({ width: 'full', height: 'full' }),
]);

export const errorMessage = style([
  sprinkles({ fontSize: '2x', marginY: '4x' }),
  { textAlign: 'center', lineHeight: '40px' },
]);
