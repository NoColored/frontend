import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from './constants';

import { borderDarkOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/vars.css';

const inputTextBoxBase = style([
  sprinkles({
    borderRadius: '2x',
    color: 'white',
  }),
  {
    textAlign: 'left',
    '::placeholder': {
      color: vars.colors.white,
    },
  },
]);

export const inputTextBoxVariants = {
  size: {
    widthFull: style([
      borderDarkOptions({ color: 'gray500', width: '3x' }),
      sprinkles({
        fontSize: '1x',
        backgroundColor: 'gray500',
      }),
      {
        textAlign: 'center',
        width: `100%`,
        height: constants.INPUT_TEXT_BOX_SIZE.small.height,
      },
    ]),
    small: style([
      borderDarkOptions({ color: 'gray500', width: '3x' }),
      sprinkles({
        fontSize: '1x',
        backgroundColor: 'gray500',
        marginY: '2x',
      }),
      {
        textAlign: 'center',
        width: constants.INPUT_TEXT_BOX_SIZE.small.width,
        height: constants.INPUT_TEXT_BOX_SIZE.small.height,
      },
    ]),
    medium: style([
      borderDarkOptions({ color: 'gray300', width: '3x' }),
      sprinkles({
        fontSize: '1.5x',
        paddingX: '4x',
        marginY: '1x',
        backgroundColor: 'gray300',
      }),
      {
        '@media': {
          'screen and (max-height: 365px)': {
            width: constants.INPUT_TEXT_BOX_SIZE.small.width,
            height: constants.INPUT_TEXT_BOX_SIZE.small.height,
          },
        },
        width: constants.INPUT_TEXT_BOX_SIZE.medium.width,
        height: constants.INPUT_TEXT_BOX_SIZE.medium.height,
      },
    ]),
    large: style([
      borderDarkOptions({ color: 'navy', width: '5x' }),
      sprinkles({
        fontSize: '2x',
        paddingX: '4x',
        marginY: '2x',
        backgroundColor: 'navy',
      }),
      {
        width: constants.INPUT_TEXT_BOX_SIZE.large.width,
        height: constants.INPUT_TEXT_BOX_SIZE.large.height,
      },
    ]),
  },
};

export const input = recipe({
  base: inputTextBoxBase,
  variants: inputTextBoxVariants,
});
