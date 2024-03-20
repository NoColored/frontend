import { style } from '@vanilla-extract/css';

import * as constants from './constants';

import { sprinkles } from '@/styles/sprinkles.css';

export const LeftButtonsWrapper = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexEnd',
  }),
  {
    gap: constants.BUTTON_GAP,
  },
]);
export const LeftAndCharacterWrapper = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
  }),
  {},
]);

export const LeftSideWrapper = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceBetween',
    height: 'full',
  }),
  {
    width: '60%',
  },
]);
