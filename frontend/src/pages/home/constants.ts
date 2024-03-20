import { calc } from '@vanilla-extract/css-utils';

import * as buttonConstants from '@/components/button/constants';

export const BUTTON_GAP = '8px';

export const CHARACTER_SIZE_HEGITH = calc.subtract(
  '100%',
  buttonConstants.COLOREDICONBUTTON_SIZE_PIXEL.medium.width,
);

export const CHARACTER_SIZE_MAX = '240px';
