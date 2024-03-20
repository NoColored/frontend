import { calc } from '@vanilla-extract/css-utils';

export const FINDER_WRAPPER_HEIGHT = calc.subtract(
  calc.subtract(calc.subtract('100%', '48px'), '16px'),
  '32px',
);
