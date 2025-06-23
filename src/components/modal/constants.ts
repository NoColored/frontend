import { calc } from '@vanilla-extract/css-utils';

import * as frameConstants from '@/components/frame/constants';

import { vars } from '@/styles/vars.css';

export const MIN_MODAL_HEIGHT = `${frameConstants.MIN_HEIGHT - frameConstants.PADDING * 4}px`;
export const MAX_MODAL_HEIGHT = `${frameConstants.MAX_HEIGHT - frameConstants.PADDING * 2}px`;
export const MODAL_WIDTH = `480px`;
export const MODAL_PADDING = '8x';
export const MODAL_INNER_WIDTH = calc
  .subtract(MODAL_WIDTH, calc.multiply(vars.space[MODAL_PADDING], 2))
  .toString();
