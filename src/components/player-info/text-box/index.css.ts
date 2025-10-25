import { recipe } from '@vanilla-extract/recipes';

import { sprinkles, variant } from '@/shared/styles';

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
