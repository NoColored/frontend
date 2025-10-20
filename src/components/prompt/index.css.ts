import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

import { IPHONE_SE } from '@/constants/screen';

export const fullscreenPromptStyle = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'full',
    height: 'full',
    zIndex: 'alert-content',
    position: 'fixed',
  }),
  {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage:
      'url(/images/background/background-white-large-h991w1922.webp)',
    overlay: 'auto',
    top: 0,
    left: 0,

    '@media': {
      [`screen and (min-width: ${IPHONE_SE.width})`]: {
        display: 'none',
      },
    },
  },
]);

export const fullscreenPromptText = style([
  {
    textAlign: 'center',
    fontSize: '40px',
    lineHeight: '48px',
    textShadow: '-3px 0px white, 0px 3px white, 3px 0px white, 0px -3px white',
  },
]);
