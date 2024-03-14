import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { COLOR, COLOR_DARK } from '@/components/button/constants.ts';

import { flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';
import { vars } from '@/styles/vars.css.ts';

const colorVariants: {
  [colorItem: string]: ReturnType<typeof style>;
} = {
  '': style([]),
};

COLOR.forEach((colorItem) => {
  const darkColor: COLOR_DARK = COLOR_DARK[colorItem];
  colorVariants[colorItem] = style([
    sprinkles({
      backgroundColor: colorItem,
    }),
    {
      boxShadow: `0 6px ${vars.colors[darkColor]}`,
      ':active': {
        transform: 'translateY(4px)',
        boxShadow: `0 2px ${vars.colors[darkColor]}`,
      },
    },
  ]);
});

const sizeVariants = {
  small: style([
    sprinkles({
      fontSize: '1.25x',
      padding: '2x',
    }),
    {
      width: '96px',
      height: '36px',
    },
  ]),
  medium: style([
    sprinkles({
      fontSize: '1.25x',
      padding: '4x',
    }),
    {
      width: '130px',
      height: '44px',
    },
  ]),
  large: style([
    sprinkles({
      fontSize: '2x',
      padding: '4x',
      marginX: '2x',
    }),
    {
      width: '192px',
      height: '64px',
    },
  ]),
};

export const coloredButtonStyle = recipe({
  base: style([
    flexOptions({
      option: 'columnCenter',
    }),
    sprinkles({
      borderRadius: '2x',
      borderStyle: 'none',
      color: 'white',
      fontFamily: 'textFont',
      position: 'relative',
    }),
    {
      lineHeight: '16px',
      transition: 'transform 0.2s, box-shadow 0.2s',
    },
  ]),
  variants: {
    color: colorVariants,
    size: sizeVariants,
  },
});

export const textStyle = style([
  flexOptions({
    option: 'center',
  }),
  sprinkles({ position: 'relative' }),
  {
    height: '100%',
    width: '100%',
  },
]);
