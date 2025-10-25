import { style } from '@vanilla-extract/css';

import { flexOptions, sprinkles } from '@/shared/styles';

export const errorWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({ width: 'full', height: 'full' }),
]);

export const errorMessage = style([
  sprinkles({ fontSize: '2x', marginY: '4x' }),
  { textAlign: 'center', lineHeight: '40px' },
]);
