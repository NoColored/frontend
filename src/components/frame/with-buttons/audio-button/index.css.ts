import { style } from '@vanilla-extract/css';

const ICON_SIZE = '16px';

export const svg = style({
  objectFit: 'contain',
  height: `${ICON_SIZE}`,
  fill: 'currentColor',
});
