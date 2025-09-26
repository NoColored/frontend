import { style } from '@vanilla-extract/css';

import { FRAME_STYLE } from './constants';

import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/vars.css';

export const base = style([
  sprinkles({
    position: 'absolute',
  }),
  {
    left: '50%',
    transform: 'translateX(-50%)',
    maxWidth: FRAME_STYLE.width.max,

    '@media': {
      'screen and (min-height: 463px)': {
        height: FRAME_STYLE.height.max,
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
