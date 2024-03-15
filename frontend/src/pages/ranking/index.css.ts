import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import * as constants from './constants.ts';

import { flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';
import { vars } from '@/styles/vars.css.ts';

export const rankingFullWrapper = sprinkles({
  width: 'full',
  height: 'full',
});
export const rankingTitleWrapper = style([
  sprinkles({
    width: 'full',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
]);
export const rankingTitleText = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    fontSize: '2x',
    backgroundColor: 'green',
    borderStyle: 'solid',
    borderColor: 'greenDark',
    borderWidth: '3x',
    borderRadius: '2x',
    color: 'white',
  }),
  {
    width: constants.titleTextWidth,
    height: constants.titleTextHeight,
  },
]);

export const rankingWrapper = style([
  {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: vars.space['2x'],
    paddingTop: vars.space['2x'],
    height: calc.subtract('100%', constants.titleTextHeight),
  },
]);

export const myRankingWrapper = style([
  sprinkles({
    backgroundColor: 'navy',
    borderRadius: '2x',
  }),
  {
    height: constants.rankingItemBox,
  },
]);
