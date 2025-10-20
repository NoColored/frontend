import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { size, tier } from './variants.css';

const base = style([
  {
    overflow: 'hidden',
    aspectRatio: '1 / 1',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'border-box',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderStyle: 'none',
  },
]);

export const tierBox = recipe({
  base,
  variants: {
    tier,
    size,
  },
});
