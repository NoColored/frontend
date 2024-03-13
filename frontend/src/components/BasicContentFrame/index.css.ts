import { style } from '@vanilla-extract/css';

import { borderOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';
import { vars } from '@/styles/vars.css.ts';

export const frame = style([
  sprinkles({
    padding: '4x',
    position: 'relative',
    size: 'full',
  }),
  {
    overflow: 'hidden',

    '@media': {
      'screen and (min-width: 748px)': {
        borderRadius: vars.borderRadius['2x'],
        border: '1px solid black',
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
    position: 'relative',
    borderRadius: '2x',
    backgroundColor: 'background',
    padding: '4x',
    size: 'full',
  }),
  {
    overflow: 'hidden',

    '@media': {
      'screen and (min-width: 748px)': {
        overflow: 'visible',
        border: 'none',
        backgroundColor: 'none',
        padding: '0',
      },
    },
  },
]);

export const navigation = style([
  {
    position: 'absolute',
    top: '0',
    left: '0',
    '@media': {
      'screen and (min-width: 748px)': {
        top: '-16px',
        left: '-16px',
      },
    },
  },
]);
