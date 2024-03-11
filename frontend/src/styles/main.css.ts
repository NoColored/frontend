import { globalStyle } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '@/styles/vars.css.ts';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  height: '100vh',
  width: '100vw',
});

globalStyle('body', {
  backgroundColor: 'black',
  display: 'inline',

  '@media': {
    'screen and (min-width: 748px)': {
      backgroundImage:
        'url(images/background/background-white-large-h991w1922.webp)',
    },
  },
});

globalStyle('#root', {
  width: '100%',
  aspectRatio: '33 / 19',
  display: 'block',

  '@media': {
    'screen and (min-width: 748px)': {
      width: '748px',
      border: '2px solid black',
      borderRadius: '8px',
      margin: `${calc('100vh').subtract('431px').divide(2).toString()} auto`,
      overflow: 'hidden',
      backgroundColor: vars.colors.background,
    },
  },
});
