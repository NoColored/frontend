import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { borderOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';
import { vars } from '@/styles/vars.css.ts';

export const button = style([
  borderOptions({ color: 'black', width: '2x' }),
  sprinkles({
    borderRadius: '2x',
    backgroundColor: 'white',
    fontFamily: 'textFont',
  }),
  {
    ':hover': {
      cursor: 'pointer',
      backgroundColor: vars.colors.gray100,
    },

    ':active': {
      backgroundColor: vars.colors.gray200,
    },
  },
]);

export const buttonVariants = {
  size: {
    small: style([
      sprinkles({
        fontSize: '1x',
        margin: '1x',
      }),
      {
        height: '28px',
        width: '60px',
      },
    ]),
    large: style([
      sprinkles({
        fontSize: '1.5x',
        margin: '3x',
      }),
      {
        height: '48px',
        width: '250px',
      },
    ]),
  },
  colorStyle: {
    black: style([
      sprinkles({
        borderColor: 'black',
        backgroundColor: 'white',
        color: 'black',
      }),
    ]),
    gray: style([
      sprinkles({
        borderColor: 'gray300',
        color: 'gray300',
      }),
    ]),
    red: style([
      sprinkles({
        borderColor: 'red',
        color: 'red',
      }),
    ]),
    dark: style([
      sprinkles({
        borderColor: 'black',
        backgroundColor: 'gray',
        color: 'black',
      }),
    ]),
  },
};

export const settingButton = recipe({
  base: button,
  variants: buttonVariants,
});
export interface ButtonVariantsProps {
  size: keyof typeof buttonVariants.size;
  colorStyle: keyof typeof buttonVariants.colorStyle;
}
