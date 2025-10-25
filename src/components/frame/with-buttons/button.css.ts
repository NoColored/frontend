import { style } from '@vanilla-extract/css';

import {
  borderDarkOptions,
  flexOptions,
  sprinkles,
  vars,
} from '@/shared/styles';

const BUTTON_SIZE = '24px';

export const button = style([
  flexOptions({ option: 'center' }),
  borderDarkOptions({ color: 'black', width: '1x' }),
  sprinkles({
    borderRadius: 'full',
    backgroundColor: 'white',
    marginX: '0.5x',
  }),
  {
    width: `${BUTTON_SIZE}`,
    height: `${BUTTON_SIZE}`,

    ':hover': {
      backgroundColor: vars.colors.gray100,
    },

    ':active': {
      backgroundColor: vars.colors.gray200,
    },
  },
]);
