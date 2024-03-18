import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from '@/components/button/constants';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/vars.css';

const colorVariants: {
  [colorItem in (typeof constants.COLOREDICONBUTTON_COLOR)[number]]?: ReturnType<
    typeof style
  >;
} = {};

constants.COLOREDICONBUTTON_COLOR.forEach((colorItem) => {
  const darkColor = constants.COLOREDICONBUTTON_COLOR_DARK[colorItem];
  colorVariants[colorItem] = style([
    sprinkles({
      backgroundColor: colorItem,
      borderColor: darkColor,
    }),
    {
      ':active': {
        backgroundColor: vars.colors[darkColor as keyof typeof vars.colors],
      },
    },
  ]);
});

const sizeVariants = {
  medium: style([
    sprinkles({
      fontSize: '1.5x',
    }),
    {
      width: constants.COLOREDICONBUTTON_SIZE_PIXEL.medium.width,
      height: constants.COLOREDICONBUTTON_SIZE_PIXEL.medium.height,
      paddingTop: '4x',
    },
  ]),
  large: style([
    sprinkles({
      fontSize: '2x',
    }),
    {
      width: constants.COLOREDICONBUTTON_SIZE_PIXEL.large.width,
      height: constants.COLOREDICONBUTTON_SIZE_PIXEL.large.height,
    },
  ]),
  xlarge: style([
    sprinkles({
      paddingTop: '2x',
      fontSize: '2x',
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
    height: constants.COLOREDICONBUTTON_ICON_SIZE,
    width: constants.COLOREDICONBUTTON_ICON_SIZE,
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
