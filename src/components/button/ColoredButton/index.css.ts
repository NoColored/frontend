import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from '@/components/button/constants';
import type { colorType } from '@/components/button/types';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/vars.css';

const colorVariants = constants.BUTTON_COLOR.reduce(
  (variants, color) => {
    const darkColor = constants.BUTTON_COLOR_DARK[color];
    variants[color] = style([
      sprinkles({
        backgroundColor: color,
      }),
      {
        boxShadow: `0 6px ${vars.colors[darkColor]}`,
        ':active': {
          transform: 'translateY(4px)',
          boxShadow: `0 2px ${vars.colors[darkColor]}`,
        },
      },
    ]);
    return variants;
  },
  {} as Record<colorType, ReturnType<typeof style>>,
);

export const sizeVariants = {
  xsmall: style([
    sprinkles({
      textSize: '0.75x',
      padding: '1x',
      marginX: '1x',
    }),
    {
      width: constants.COLORED_BUTTON_SIZE_PIXEL.xsmall.width,
      height: constants.COLORED_BUTTON_SIZE_PIXEL.xsmall.height,
    },
  ]),
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
