import { style } from '@vanilla-extract/css';

import { FRAME_STYLE } from '../constants';
import { base } from '../frame.css';

export const frame = style([
  base,
  {
    overflow: 'hidden',
    minHeight: FRAME_STYLE.height.min,

    '@media': {
      'screen and (max-height: 463px)': {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
      },
    },
  },
]);
