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

const inputTextBoxVariants = {
  size: {
    small: style([
      borderDarkOptions({ color: 'gray500', width: '3x' }),
      sprinkles({
        fontSize: '1x',
        backgroundColor: 'gray500',
        marginY: '2x',
      }),
      {
        textAlign: 'center',
        width: `${constants.INPUT_SMALL.width}px`,
        height: `${constants.INPUT_SMALL.height}px`,
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
        width: `${constants.INPUT_MEDIUM.width}px`,
        height: `${constants.INPUT_MEDIUM.height}px`,
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
        width: `${constants.INPUT_LARGE.width}px`,
        height: `${constants.INPUT_LARGE.height}px`,
      },
    ]),
  },
};

// <InputTextBox placeholder='보십쇼' size='medium' onChange={}/>
export const inputTextBox = recipe({
  base: inputTextBoxBase,
  variants: inputTextBoxVariants,
});
