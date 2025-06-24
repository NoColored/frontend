import { style } from '@vanilla-extract/css';

import { borderDarkOptions, flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/vars.css';

const BUTTON_SIZE = '24px';
const ICON_SIZE = '16px';

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

export const svg = style({
  objectFit: 'contain',
  height: `${ICON_SIZE}`,
  fill: 'currentColor',
});
