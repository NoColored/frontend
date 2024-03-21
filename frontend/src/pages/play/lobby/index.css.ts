import { style } from '@vanilla-extract/css';

import * as constants from './constants';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const lobby = style([
  {
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    gridTemplateRows: '100%',
    height: '100%',
  },
]);

export const settings = style([
  flexOptions({ option: 'column' }),
  {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
]);

export const lobbyInfo = style([flexOptions({ option: 'column' })]);

export const lobbyTitle = style([
  sprinkles({
    textSize: constants.TITLE_SIZE,
    marginBottom: constants.TITLE_MARGIN_BOTTOM,
  }),
]);
