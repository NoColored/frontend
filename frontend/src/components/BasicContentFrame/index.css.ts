import { style } from '@vanilla-extract/css';

import * as data from './frame-data.ts';

import { sprinkles } from '@/styles/sprinkles.css.ts';
import { vars } from '@/styles/vars.css.ts';

export const basicFrame = style([
  sprinkles({
    position: 'fixed',
  }),
  {
    left: '50%',
    transform: 'translateX(-50%)',
    maxWidth: data.MAX_FRAME_WIDTH,

    '@media': {
      'screen and (min-height: 463px)': {
        height: data.MAX_FRAME_HEIGHT,
        aspectRatio: '33 / 19',
        backgroundColor: vars.colors.background,
        borderRadius: vars.borderRadius['2x'],
        border: '1px solid black',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
  },
]);

export const frame = style([
  basicFrame,
  {
    overflow: 'hidden',
    minHeight: data.MIN_FRAME_HEIGHT,

    '@media': {
      'screen and (max-height: 463px)': {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
      },
    },
  },
]);
