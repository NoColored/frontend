import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { borderOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';
import { vars } from '@/styles/vars.css.ts';

export const frame = style([
  sprinkles({
    padding: '4x',
    position: 'fixed',
  }),
  {
    height: `${calc('100%').subtract('32px')}`,
    aspectRatio: '33 / 19',
    boxSizing: 'content-box',
    margin: '0 auto',
    left: '50%',
    transform: 'translateX(-50%)',

    '@media': {
      'screen and (min-height: 463px)': {
        borderRadius: vars.borderRadius['2x'],
        border: '1px solid black',
        boxSizing: 'border-box',
        height: '431px',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: vars.colors.background,
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
      'screen and (min-height: 463px)': {
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
    height: '100%',
    aspectRatio: '33 / 19',

    '@media': {
      'screen and (min-height: 463px)': {
        border: 'none',
        backgroundColor: 'transparent',
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
      'screen and (min-height: 463px)': {
        top: '-16px',
        left: '-16px',
      },
    },
  },
]);
