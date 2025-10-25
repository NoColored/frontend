import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { size } from './variants.css';

import { sprinkles, vars } from '@/shared/styles';

const base = style([
  sprinkles({
    fontFamily: 'textFont',
    borderRadius: '2x',
    color: 'white',
  }),
  {
    '::placeholder': {
      color: vars.colors.white,
    },
  },
]);

export const input = recipe({
  base,
  variants: {
    size,
  },
});
