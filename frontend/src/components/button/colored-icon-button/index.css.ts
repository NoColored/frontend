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
  const darkColor = `${colorItem}Dark`;
  colorVariants[colorItem] = style([
    sprinkles({
      backgroundColor: colorItem,
      borderColor: darkColor as keyof typeof vars.colors,
      borderWidth: '2x',
    }),
    {
      ':active': {
        backgroundColor: vars.colors[darkColor as keyof typeof vars.colors],
      },
    },
  ]);
});

const baseStyle = style([
  flexOptions({
    option: 'columnCenter',
  }),
  sprinkles({
    color: 'white',
    fontFamily: 'textFont',
    borderStyle: 'solid',
    borderRadius: '2x',
    borderWidth: '2x',
  }),
  {
    transition: 'all 0.2s',
  },
]);

export const coloredIconButtonStyle = recipe({
  base: baseStyle,
  variants: {
    color: colorVariants,
  },
});
