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
        borderColor: darkColor,
      }),
      {
        ':active': {
          backgroundColor: vars.colors[darkColor as keyof typeof vars.colors],
        },
      },
    ]);
    return variants;
  },
  {} as Record<colorType, ReturnType<typeof style>>,
);

const sizeVariants = {
  medium: style([
    sprinkles({
      textSize: '1.5x',
    }),
    {
      width: constants.COLOREDICONBUTTON_SIZE_PIXEL.medium.width,
      height: constants.COLOREDICONBUTTON_SIZE_PIXEL.medium.height,
      paddingTop: '4x',

      '@media': {
        'screen and (max-height: 380px)': {
          height: '80px',
        },
      },
    },
  ]),
  large: style([
    sprinkles({
      textSize: '2x',
      width: 'full',
    }),
    {
      height: constants.COLOREDICONBUTTON_SIZE_PIXEL.large.height,

      '@media': {
        'screen and (max-height: 380px)': {
          fontSize: '20px',
          lineHeight: '20px',
          height: '68px',
        },
      },
    },
  ]),
  xlarge: style([
    sprinkles({
      paddingTop: '2x',
      textSize: '3x',
    }),
    {
      width: constants.COLOREDICONBUTTON_SIZE_PIXEL.xlarge.width,
      height: constants.COLOREDICONBUTTON_SIZE_PIXEL.xlarge.height,
    },
  ]),
};

export const coloredIconButtonStyle = recipe({
  base: style([
    flexOptions({
      option: 'columnCenter',
    }),
    sprinkles({
      color: 'white',
      fontFamily: 'textFont',
      borderStyle: 'solid',
      borderRadius: '2x',
      borderWidth: '4x',
      paddingBottom: '2x',
      paddingRight: '1x',
      paddingLeft: '1x',
    }),
    {
      transition: 'all 0.2s',
    },
  ]),
  variants: {
    color: colorVariants,
    size: sizeVariants,
  },
});

// 여기서부터 버튼 내부 스타일

export const iconStyle = style([
  flexOptions({
    option: 'center',
  }),
  sprinkles({
    position: 'relative',
  }),
  {
    height: constants.COLORED_ICON_BUTTON_ICON_SIZE,
    width: constants.COLORED_ICON_BUTTON_ICON_SIZE,

    '@media': {
      'screen and (max-height: 380px)': {
        height: '32px',
        width: '32px',
      },
    },
  },
]);

export const textStyle = style([
  flexOptions({
    option: 'center',
  }),
  sprinkles({
    position: 'relative',
    height: 'full',
    width: 'full',
  }),
]);
