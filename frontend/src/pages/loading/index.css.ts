import { style } from '@vanilla-extract/css';

import { flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

export const loadingWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({
    backgroundColor: 'black',
    width: 'full',
    height: 'full',
    color: 'white',
    fontFamily: 'loadingNumFont',
  }),
  {
    justifyContent: 'space-evenly',
  },
]);

export const loadingMessageWrapper = style([
  flexOptions({ option: 'row' }),
  sprinkles({
    justifyContent: 'spaceAround',
    marginY: '4x',
  }),
  {
    width: '70%',
  },
]);

export const loadingMessage = style([
  sprinkles({
    marginX: '8x',
    fontFamily: 'loadingTextFont',
  }),
  {
    lineHeight: '24px',
  },
]);
