import { keyframes, style } from '@vanilla-extract/css';

import { flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

export const landingBox = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({ borderRadius: '1x' }),
  {
    // width: '100%',
    height: '100%',
    margin: 'auto',
    backgroundImage:
      'url(/public/images/landing-background-animation-h490w950.gif)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
]);

export const contentBox = style([
  flexOptions({ option: 'columnCenter' }),
  // { height: '90%' },
]);
export const buttonBox = style([
  flexOptions({ option: 'row' }),
  sprinkles({
    marginY: '2x',
  }),
]);

const blinkEffect = keyframes({
  '50%': { opacity: 0 },
});

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
    animation: `${blinkEffect} 1s step-end infinite`,
  },
]);

export const logoImage = style([
  {
    height: '160px',
  },
]);
