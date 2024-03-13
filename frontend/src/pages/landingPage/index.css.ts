import { style } from '@vanilla-extract/css';

import { flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

export const landingBox = style([
  flexOptions({ option: 'center' }),
  sprinkles({ borderRadius: '1x' }),
  {
    width: '100%',
    height: '100%',
    margin: 'auto',
    backgroundImage:
      'url(/public/images/landing-background-animation-h490w950.gif)',
    backgroundSize: 'cover',
  },
]);

export const logoBox = style([
  flexOptions({ option: 'columnCenter' }),
  { width: '100%', height: '90%' },
]);

export const buttonBox = style([
  flexOptions({ option: 'center' }),
  sprinkles({ justifyContent: 'spaceAround' }),
  {
    width: '55%',
  },
]);

export const clickText = style([
  sprinkles({
    fontSize: '1x',
    fontWeight: 'normal',
    fontFamily: 'textFont',
    color: 'gray300',
    marginTop: '3x',
  }),
  {
    textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white',
  },
]);
