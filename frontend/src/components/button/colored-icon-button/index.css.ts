import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/styles/sprinkles.css.ts';

const coloredIconButtonBase = sprinkles({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const coloredIconButton = recipe({
  base: coloredIconButtonBase,
  variants: {
    color: {
      red: sprinkles({ backgroundColor: 'red' }),
      yellow: sprinkles({ backgroundColor: 'yellow' }),
      green: sprinkles({ backgroundColor: 'green' }),
      blue: sprinkles({ backgroundColor: 'blue' }),
      pink: sprinkles({ backgroundColor: 'pink' }),
      navy: sprinkles({ backgroundColor: 'navy' }),
      gray: sprinkles({ backgroundColor: 'gray' }),
    },
  },
});
