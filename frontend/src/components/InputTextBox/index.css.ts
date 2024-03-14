import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { borderOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';
import { vars } from '@/styles/vars.css.ts';

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
      borderOptions({ color: 'gray500', width: '3x' }),
      sprinkles({
        fontSize: '1x',
        backgroundColor: 'gray500',
      }),
      {
        textAlign: 'center',
        width: '360px',
        height: '40px',
      },
    ]),
    medium: style([
      borderOptions({ color: 'gray300', width: '3x' }),
      sprinkles({
        fontSize: '1.5x',
        paddingX: '4x',
        backgroundColor: 'gray300',
      }),
      {
        width: '400px',
        height: '48px',
      },
    ]),
    large: style([
      borderOptions({ color: 'navy', width: '5x' }),
      sprinkles({
        fontSize: '2x',
        paddingX: '4x',
        marginY: '2x',
        backgroundColor: 'navy',
      }),
      {
        width: '400px',
        height: '64px',
      },
    ]),
  },
};

// <InputTextBox placeholder='보십쇼' size='medium' onChange={}/>
export const inputTextBox = recipe({
  base: inputTextBoxBase,
  variants: inputTextBoxVariants,
});
