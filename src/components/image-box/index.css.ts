import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { backgroundColor, borderColor, borderSize, size } from './variants.css';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

const base = style([
  flexOptions({ option: 'column' }),
  sprinkles({
    borderRadius: '2x',
    paddingY: '2x',
    alignItems: 'center',
  }),
  {
    boxSizing: 'border-box',
    overflow: 'hidden',
    aspectRatio: '1 / 1',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'border-box',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
]);

export const roundCornerImageBox = recipe({
  base,
  variants: {
    size,
    borderSize,
    borderColor,
    backgroundColor,
  },
});
