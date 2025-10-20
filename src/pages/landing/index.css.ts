import { keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { INPUT_STYLE } from '@/components/input/constants';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/vars.css';

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
    height: calc
      .add(
        calc.multiply(INPUT_STYLE.large.height, 2),
        calc.multiply(vars.space[INPUT_STYLE.large.marginY], 4),
      )
      .toString(),
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
