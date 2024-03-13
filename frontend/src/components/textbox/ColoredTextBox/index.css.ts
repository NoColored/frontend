import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { BACKGROUND_COLOR } from '@/components/textbox/ColoredTextBox/coloredText-data.ts.tsx';

import { flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

const colorVariants: {
  [colorItem: string]: ReturnType<typeof style>;
} = {
  '': style([]),
};

BACKGROUND_COLOR.forEach((colorItem) => {
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
      paddingX: '3x',
      paddingY: '2x',
    }),
    {
      width: 'fit-content',
      height: 'fit-content',
      objectFit: 'cover',
    },
  ],
  variants: {
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
  },
]);
