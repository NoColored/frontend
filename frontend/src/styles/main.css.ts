import { globalStyle } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css.ts';

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

globalStyle('input:focus', {
  outline: 'none',
});

globalStyle('html, body, #root', {
  height: '100vh',
  width: '100vw',
});

globalStyle('body', {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage:
    'url(images/background/background-white-small-h450w873.webp)',

  '@media': {
    'screen and (min-height: 463px)': {
      backgroundImage:
        'url(images/background/background-white-large-h991w1922.webp)',
    },
  },
});
