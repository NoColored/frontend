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
    width: '75%',
  },
]);

export const loadingNumFont = style([
  sprinkles({
    marginX: '4x',
    textSize: '1.5x',
    fontFamily: 'loadingNumFont',
  }),
]);

export const loadingMessage = style([
  sprinkles({
    marginX: '4x',
    textSize: '1x',
    fontFamily: 'loadingTextFont',
  }),
  {
    lineHeight: '24px',
  },
]);
