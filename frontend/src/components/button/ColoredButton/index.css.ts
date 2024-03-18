import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from '@/components/button/constants';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/vars.css';

const colorVariants: {
  [colorItem in (typeof constants.BUTTON_COLOR)[number]]?: ReturnType<
    typeof style
  >;
} = {};

constants.BUTTON_COLOR.forEach((colorItem) => {
  const darkColor = constants.BUTTON_COLOR_DARK[colorItem];
  colorVariants[colorItem] = style([
    sprinkles({
      backgroundColor: colorItem,
    }),
    {
      boxShadow: `0 6px ${vars.colors[darkColor as keyof typeof vars.colors]}`,
      ':active': {
        transform: 'translateY(4px)',
        boxShadow: `0 2px ${vars.colors[darkColor as keyof typeof vars.colors]}`,
      },
    },
  ]);
});

const sizeVariants = {
  small: style([
    sprinkles({
      fontSize: '1.25x',
      padding: '2x',
      marginX: '2x',
    }),
    {
      width: constants.COLORED_BUTTON_SIZE_PIXEL.small.width,
      height: constants.COLORED_BUTTON_SIZE_PIXEL.small.height,
    },
  ]),
  medium: style([
    sprinkles({
      fontSize: '1.25x',
      padding: '4x',
    }),
    {
      width: constants.COLORED_BUTTON_SIZE_PIXEL.medium.width,
      height: constants.COLORED_BUTTON_SIZE_PIXEL.medium.height,
    },
  ]),
  large: style([
    sprinkles({
      fontSize: '2x',
      padding: '4x',
    }),
    {
      width: constants.COLORED_BUTTON_SIZE_PIXEL.large.width,
      height: constants.COLORED_BUTTON_SIZE_PIXEL.large.height,
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
      marginX: '2x',
      marginY: '2x',
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
    height: 'full',
    width: 'full',
  },
]);
