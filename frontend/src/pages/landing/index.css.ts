import { keyframes, style } from '@vanilla-extract/css';

import * as constants from '@/pages/landing/constants.ts';

import { flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

export const landingWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({ borderRadius: '1x', height: 'full', margin: 'auto' }),
  {
    backgroundImage: 'url(/images/landing-background-animation-h490w950.gif)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
]);

export const contentWrapper = style([flexOptions({ option: 'columnCenter' })]);
export const buttonWrapper = style([
  flexOptions({ option: 'row' }),
  sprinkles({
    marginY: '2x',
  }),
]);

const BLINK_EFFECT = keyframes({
  '50%': { opacity: 0 },
});

export const clickMessage = style([
  sprinkles({
    fontSize: '1x',
    fontWeight: 'accent',
    fontFamily: 'textFont',
    color: 'black',
    marginTop: '4x',
  }),
  {
    textShadow: '-4px 0 white, 0 4px white, 4px 0 white, 0 -4px white',
    animation: `${BLINK_EFFECT} 1s step-end infinite`,
  },
]);

export const logoImage = style([
  {
    height: constants.LOGOIMAGE_HEIGHT,
  },
]);

export const logInFailMessageWrapper = style([
  sprinkles({
    marginY: '8x',
  }),
  {
    textAlign: 'center',
  },
]);

export const logInFailMessage = style([
  sprinkles({
    fontSize: '1.5x',
    marginY: '2x',
  }),
  {
    lineHeight: '32px',
  },
]);
