import { globalStyle } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '@/styles/vars.css.ts';

const HEIGHT = '431px';
const WIDTH = '748px';

globalStyle('*', {
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: 'border-box',
  lineHeight: '16px',
  fontFamily: vars.fontFamily.textFont,
});

globalStyle('button:hover', {
  cursor: 'pointer',
});

globalStyle('html, body', {
  height: '100vh',
  width: '100vw',
});

globalStyle('body', {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage:
    'url(images/background/background-white-small-h450w873.webp)',
  display: 'inline',

  '@media': {
    'screen and (min-height: 463px)': {
      backgroundImage:
        'url(images/background/background-white-large-h991w1922.webp)',
    },
  },
});

globalStyle('#root', {
  position: 'relative',
  width: '100%',
  height: '100%',

  '@media': {
    'screen and (min-height: 463px)': {
      width: WIDTH,
      height: HEIGHT,
      padding: 0,
      margin: `${calc('100vh').subtract(HEIGHT).divide(2).toString()} auto`,
      backgroundColor: vars.colors.background,
    },
  },
});
