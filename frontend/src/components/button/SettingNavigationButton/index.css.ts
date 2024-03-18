import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/vars.css';

export const button = style([
  sprinkles({
    backgroundColor: 'white',
    fontSize: '0.75x',
    paddingX: '2x',
    paddingY: '1x',
  }),
  {
    borderBottom: '1px solid black',
    borderRight: '1px solid black',
    borderTopLeftRadius: vars.borderRadius['2x'],

    ':hover': {
      backgroundColor: vars.colors.gray100,
    },

    ':active': {
      backgroundColor: vars.colors.gray200,
    },
  },
]);
