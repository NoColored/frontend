import { calc } from '@vanilla-extract/css-utils';

import { FRAME_STYLE } from '@/components/frame';

import { vars } from '@/styles/vars.css';

export const MIN_MODAL_HEIGHT = calc
  .subtract(FRAME_STYLE.height.min, calc.multiply(FRAME_STYLE.padding, 4))
  .toString();
export const MAX_MODAL_HEIGHT = calc
  .subtract(FRAME_STYLE.height.max, calc.multiply(FRAME_STYLE.padding, 2))
  .toString();
export const MODAL_WIDTH = `480px`;
export const MODAL_PADDING = '8x';
export const MODAL_INNER_WIDTH = calc
  .subtract(MODAL_WIDTH, calc.multiply(vars.space[MODAL_PADDING], 2))
  .toString();
