import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '@/styles/sprinkles.css.ts';

export const coloredButtonStyleCss = recipe({
  base: sprinkles({ boxShadow: 'colorButtonShadow', borderStyle: 'none' }),
  variants: {
    colors: {
      red: sprinkles({
        backgroundColor: { default: 'red', active: 'redDark' },
        boxShadow: 'colorButtonShadow',
        boxShadowColors: 'redDark',
      }),
      yellow: sprinkles({
        backgroundColor: { default: 'yellow', active: 'yellowDark' },
      }),
      green: sprinkles({
        backgroundColor: { default: 'green', active: 'greenDark' },
      }),
      blue: sprinkles({
        backgroundColor: { default: 'blue', active: 'blueDark' },
      }),
      pink: sprinkles({
        backgroundColor: { default: 'pink', active: 'pinkDark' },
      }),
      navy: sprinkles({
        backgroundColor: { default: 'navy', active: 'navyDark' },
      }),
    },
  },
});
