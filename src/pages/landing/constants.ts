import { calc } from '@vanilla-extract/css-utils';

import * as inputConstants from '@/components/textbox/InputTextBox/constants';

export const LANDING_LOGO_URL = '/images/landing-logo-whiteborder-h800w1280.png';
export const LOGOIMAGE_HEIGHT = calc
  .add(
    calc.multiply(inputConstants.INPUT_TEXT_BOX_SIZE.large.height, 2),
    calc.multiply(inputConstants.INPUT_TEXT_BOX_SIZE.large.margin, 4),
  )
  .toString();
