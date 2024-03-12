import { recipe } from '@vanilla-extract/recipes';

import { colorAndShadowColorSet } from '@/components/button/colored-icon-button/colorSet.ts';

import { sprinkles } from '@/styles/sprinkles.css.ts';

const coloredIconButtonBase = sprinkles({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

const coloredIconButtonColors: ('red' | 'green' | 'blue' | 'pink')[] = [
  'red',
  'green',
  'blue',
  'pink',
];

const coloredIconButtonColorVariants = coloredIconButtonColors.flatMap(
  (color) => [
    {
      variants: {},
      style: {
        colorStyle: colorAndShadowColorSet[color].color,
        shadowColor: colorAndShadowColorSet[color].shadowColor,
      },
    },
  ],
);

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
