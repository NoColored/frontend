import { style } from '@vanilla-extract/css';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const gridBox = style({
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
});

export const characterWrapper = style({
  width: '35%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

export const label = style([
  sprinkles({
    fontWeight: 'accent',
    textSize: '1x',
    width: 'full',
  }),
  {
    textAlign: 'center',
  },
]);

export const mySkin = style([
  sprinkles({
    width: 'full',
    aspectRatio: 'square',
  }),
  {
    position: 'relative',
    objectFit: 'cover',
    objectPosition: 'center',
  },
]);

export const submitButtonWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({
    position: 'relative',
    marginTop: '2x',
  }),
]);
