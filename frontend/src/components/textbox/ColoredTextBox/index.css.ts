import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from '@/components/textbox/constants';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

const colorVariants: {
  [colorItem in (typeof constants.BACKGROUND_COLOR)[number]]?: ReturnType<
    typeof style
  >;
} = {};

constants.BACKGROUND_COLOR.forEach((colorItem) => {
  colorVariants[colorItem] = style([
    sprinkles({
      backgroundColor: colorItem,
    }),
  ]);
});

export const coloredTextBoxStyle = recipe({
  base: [
    flexOptions({
      option: 'center',
    }),
    sprinkles({
      fontFamily: 'textFont',
      fontSize: '1x',
      color: 'white',
      borderRadius: '4x',
    }),
    {
      width: 'fit-content',
      height: 'fit-content',
      objectFit: 'cover',
    },
  ],
  variants: {
    size: {
      small: sprinkles({
        textSize: '0.75x',
        paddingY: '1x',
        paddingX: '2x',
      }),
      medium: style([
        sprinkles({
          textSize: '1x',
          paddingY: '1x',
          paddingX: '3x',
        }),
        {
          '@media': {
            'screen and (max-height: 380px)': {
              fontSize: '12px',
              lineHeight: '12px',
              padding: '4px 8px',
            },
          },
        },
      ]),
    },
    color: colorVariants,
  },
});

export const iconStyle = style([
  flexOptions({
    option: 'center',
  }),
  sprinkles({
    marginRight: '0.5x',
  }),
  {
    width: '16px',
    height: '16px',

    '@media': {
      'screen and (max-height: 380px)': {
        width: '12px',
        height: '12px',
      },
    },
  },
]);
