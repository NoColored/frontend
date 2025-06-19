import { style } from '@vanilla-extract/css';

import * as constants from './constants';

import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/vars.css';

export const basicFrame = style([
  sprinkles({
    position: 'absolute',
  }),
  {
    left: '50%',
    transform: 'translateX(-50%)',
    maxWidth: constants.MAX_FRAME_WIDTH,

    '@media': {
      'screen and (min-height: 463px)': {
        height: constants.MAX_FRAME_HEIGHT,
        aspectRatio: '33 / 19',
        backgroundColor: vars.colors.background,
        borderRadius: vars.borderRadius['2x'],
        outline: '1px solid black',
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
    minHeight: constants.MIN_FRAME_HEIGHT,

    '@media': {
      'screen and (max-height: 463px)': {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
      },
    },
  },
]);
