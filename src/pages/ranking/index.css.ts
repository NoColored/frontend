import { style } from '@vanilla-extract/css';

import * as constants from './constants';

import { flexOptions, sprinkles } from '@/shared/styles';

export const rankingFullWrapper = style([
  sprinkles({
    width: 'full',
    height: 'full',
    display: 'flex',
    flexDirection: 'column',
  }),
  {
    overflow: 'hidden',
  },
]);
export const rankingTitleWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({
    width: 'full',
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
    marginY: '1x',
  }),
  {
    width: constants.TITLE_TEXT_WIDTH,
    height: constants.TITLE_TEXT_HEIGHT,
  },
]);

export const guestText = style([
  flexOptions({ option: 'row' }),
  sprinkles({
    marginTop: '1.5x',
    color: 'gray300',
    justifyContent: 'flexEnd',
    paddingX: '1.5x',
  }),
  {
    fontSize: constants.GUEST_TEXT_SIZE,
    width: constants.GUEST_TEXT_WIDTH,
  },
]);

export const rankingWrapper = style([
  sprinkles({
    marginY: '1.5x',
  }),
  {
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: 'white',
    flexGrow: 1,
    overflow: 'scroll',
  },
]);

export const myRankingWrapper = style([
  sprinkles({
    margin: 'auto',
    backgroundColor: 'navy',
    borderRadius: '2x',
  }),
  {
    width: '98%',
  },
]);
