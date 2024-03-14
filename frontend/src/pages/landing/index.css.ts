import { style } from '@vanilla-extract/css';

import { BLINK_EFFECT } from '@/components/textbox/constants.ts';

import { flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

export const landingWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({ borderRadius: '1x', height: 'full', margin: 'auto' }),
  {
    backgroundImage:
      'url(/public/images/landing-background-animation-h490w950.gif)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
]);

export const contentWrapper = style([flexOptions({ option: 'columnCenter' })]);
export const buttonBox = style([
  flexOptions({ option: 'row' }),
  sprinkles({
    marginY: '2x',
  }),
]);

export const clickText = style([
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
    height: '160px',
  },
]);
