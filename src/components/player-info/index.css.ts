import { style } from '@vanilla-extract/css';

import { flexOptions, sprinkles } from '@/shared/styles';

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
