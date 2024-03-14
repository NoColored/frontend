import { style } from '@vanilla-extract/css';

import { flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

export const landingBox = style([
  flexOptions({ option: 'center' }),
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

export const logoBox = style([
  flexOptions({ option: 'columnCenter' }),
  { width: '100%', height: '90%' },
]);

export const loginBox = style([
  flexOptions({ option: 'columnCenter' }),
  { width: '100%', height: '90%' },
]);

export const inputBox = style([flexOptions({ option: 'columnCenter' })]);

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
  },
]);
