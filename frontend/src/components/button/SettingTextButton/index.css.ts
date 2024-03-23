import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from './constants';

import type { settingTextButtonColorType } from '@/components/button/types';

import { borderDarkOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/vars.css';

export const button = style([
  borderDarkOptions({ color: 'black', width: '2x' }),
  sprinkles({
    borderRadius: '2x',
    backgroundColor: 'white',
    fontFamily: 'textFont',
  }),
  {
    ':hover': {
      backgroundColor: vars.colors.gray100,
    },

    ':active': {
      backgroundColor: vars.colors.gray200,
    },
  },
]);

export const buttonVariants = {
  size: {
    xsmall: style([
      sprinkles({
        fontSize: '1x',
        margin: '1x',
      }),
      {
        width: '28px',
        height: '28px',
      },
    ]),
    small: style([
      sprinkles({
        fontSize: '1x',
        margin: '1x',
      }),
      {
        height: constants.SETTING_TEXT_BUTTON.small.height,
        width: constants.SETTING_TEXT_BUTTON.small.width,
      },
    ]),
    medium: style([
      sprinkles({
        fontSize: '1.5x',
        margin: '1x',
      }),
      {
        height: constants.SETTING_TEXT_BUTTON.medium.height,
        width: constants.SETTING_TEXT_BUTTON.medium.width,
      },
    ]),
    large: style([
      sprinkles({
        fontSize: '1.5x',
        margin: '1x',
      }),
      {
        height: constants.SETTING_TEXT_BUTTON.large.height,
        width: constants.SETTING_TEXT_BUTTON.large.width,
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
  colorStyle: settingTextButtonColorType;
}
