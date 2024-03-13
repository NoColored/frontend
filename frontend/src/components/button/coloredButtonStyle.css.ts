import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import {
  ICON_COLOR_VALUES,
  ColorButtonColors,
} from '@/components/button/ButtonTypes.ts';

import { flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';
import { vars } from '@/styles/vars.css.ts';

const colorVariants: {
  [colorItem in ColorButtonColors['color']]: ReturnType<typeof style>;
} = {
  red: '',
  yellow: '',
  green: '',
  blue: '',
  pink: '',
  navy: '',
};

ICON_COLOR_VALUES.forEach((colorItem) => {
  const darkColorKey = `${colorItem}Dark`;
  colorVariants[colorItem] = style([
    sprinkles({
      backgroundColor: colorItem,
    }),
    {
      ':active': {
        backgroundColor: vars.colors[darkColorKey as keyof typeof vars.colors],
      },
    },
  ]);
});

export const coloredButtonStyleCss = recipe({
  base: style([
    flexOptions({
      option: 'columnCenter',
    }),
    sprinkles({
      color: 'white',
      fontFamily: 'textFont',
    }),
    {
      transition: 'all 0.2s',
    },
  ]),
  variants: {
    color: colorVariants,
  },
});
