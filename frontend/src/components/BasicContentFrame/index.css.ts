import { style } from '@vanilla-extract/css';

import { borderOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

export const frame = style([
  sprinkles({
    padding: '4x',
    position: 'relative',
    size: 'full',
  }),
  {
    '@media': {
      'screen and (min-width: 748px)': {
        width: '748px',
        height: '431px',
      },
    },
  },
]);

export const iconButtons = style([
  sprinkles({
    display: 'flex',
    position: 'absolute',
    zIndex: 'z-1',
  }),
  {
    right: '24px',
    top: '8px',

    '@media': {
      'screen and (min-width: 748px)': {
        top: '-8px',
        right: '8px',
      },
    },
  },
]);

export const main = style([
  borderOptions({ color: 'black', width: '1x' }),
  sprinkles({
    borderRadius: '2x',
    backgroundColor: 'background',
    padding: '4x',
    size: 'full',
  }),
  {
    '@media': {
      'screen and (min-width: 748px)': {
        border: 'none',
        backgroundColor: 'none',
        padding: '0',
      },
    },
  },
]);
