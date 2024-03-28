import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from './constants';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const rankingFullWrapper = style([
  sprinkles({
    width: 'full',
    height: 'full',
  }),
  {
    overflow: 'hidden',
  },
]);
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
    marginBottom: '2x',
  }),
  {
    width: constants.TITLE_TEXT_WIDTH,
    height: constants.TITLE_TEXT_HEIGHT,
  },
]);

export const rankingWrapper = style([
  sprinkles({
    marginTop: '2x',
    marginBottom: '2x',
  }),
  {
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: 'white',
    height: constants.RANKINGWRAPPER_HEIGHT,
    overflow: 'scroll',
  },
]);

export const myRankingWrapper = style([
  sprinkles({
    backgroundColor: 'navy',
    borderRadius: '2x',
  }),
  {
    height: constants.RANKINGITEMBOX_HEIGHT,
  },
]);

export const rankingItemBox = recipe({
  base: [
    flexOptions({ option: 'rowCenter' }),
    sprinkles({
      fontSize: '2x',
      justifyContent: 'spaceAround',
      borderStyle: 'solid',
      borderWidth: '2x',
      borderRadius: '2x',
      marginBottom: '1x',
    }),
    {
      height: constants.RANKINGITEMBOX_HEIGHT,
      boxSizing: 'border-box',
      overflow: 'hidden',
    },
  ],
  variants: {
    myRank: {
      true: [
        sprinkles({
          backgroundColor: 'navy',
          color: 'white',
        }),
        {
          paddingLeft: '5%',
          paddingRight: '5%',
          height: constants.MYRANKINGITEMBOX_HEIGHT,
        },
      ],
    },
  },
});

export const playerInfoBoxFixWidthWrapper = style([
  sprinkles({
    display: 'flex',
    justifyContent: 'flexStart',
  }),
  {
    width: constants.PLAYERINFOBOX_WIDTH,
  },
]);

export const tierAndScoreWrapper = style([
  flexOptions({ option: 'rowCenter' }),
  sprinkles({
    justifyContent: 'spaceBetween',
  }),
  {
    width: constants.TIERANDSORE_WIDTH,
  },
]);
export const rankTextWrapper = style([
  flexOptions({ option: 'center' }),
  {
    width: constants.RANKTEXT_WARRAPER_WIDTH,
  },
]);

export const rankLongTextWrapper = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    textSize: '1x',
  }),
  {
    width: constants.RANKTEXT_WARRAPER_WIDTH,
  },
]);
