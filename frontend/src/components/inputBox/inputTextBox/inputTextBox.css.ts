import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';
import { vars } from '@/styles/vars.css.ts';

const inputTextBoxBase = style([
  sprinkles({
    fontFamily: 'textFont',
    borderRadius: '2x',
    borderWidth: '4x',
    borderColor: 'gray700',
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
      sprinkles({
        fontSize: '1x',
      }),
      {
        textAlign: 'center',
        width: '360px',
        height: '40px',
        backgroundColor: 'gray',
      },
    ]),
    medium: style([
      sprinkles({
        fontSize: '1.5x',
        paddingX: '4x',
      }),
      {
        width: '400px',
        height: '48px',
        backgroundColor: 'gray',
      },
    ]),
    large: style([
      sprinkles({
        fontSize: '2x',
        paddingX: '4x',
        backgroundColor: 'black',
      }),
      {
        width: '400px',
        height: '64px',
        border: 'none',
      },
    ]),
  },
};

// <InputTextBox placeholder='보십쇼' size='medium' onChange={}/>
export const inputTextBox = recipe({
  base: inputTextBoxBase,
  variants: inputTextBoxVariants,
});

// <div className={inputTextBoxWrapper}>
export const inputTextBoxWrapper = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    flexDirection: 'column',
  }),
  {
    padding: '3x',
    gap: '5px',
  },
]);
