import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/styles/sprinkles.css';
import { variant } from '@/styles/utils';

const colorVariants = variant(['white'] as const, (color) =>
  sprinkles({
    color,
  }),
);

export const textStyle = recipe({
  base: sprinkles({
    fontFamily: 'textFont',
  }),
  variants: {
    textPosition: {
      label: sprinkles({
        fontSize: '0.5x',
      }),
      content: sprinkles({
        fontSize: '1x',
      }),
    },
    color: colorVariants,
  },
});
