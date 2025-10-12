import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const rankingItemBox = recipe({
  base: [
    flexOptions({ option: 'rowCenter' }),
    sprinkles({
      fontFamily: 'textFont',
      fontSize: '2x',
      justifyContent: 'spaceAround',
      borderStyle: 'solid',
      borderWidth: '2x',
      borderRadius: '2x',
    }),
    {
      height: '48px',
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
          borderStyle: 'none',
        }),
        {
          paddingLeft: '5%',
          paddingRight: '5%',
          height: '60px',
        },
      ],
      false: [
        sprinkles({
          marginBottom: '1x',
        }),
      ],
    },
  },
  defaultVariants: {
    myRank: false,
  },
});

export const playerInfoBoxFixWidthWrapper = style([
  sprinkles({
    display: 'flex',
    justifyContent: 'flexStart',
  }),
  {
    width: '212px',
  },
]);

export const tierAndScoreWrapper = style([
  flexOptions({ option: 'rowCenter' }),
  sprinkles({
    justifyContent: 'spaceBetween',
  }),
  {
    width: '140px',
  },
]);

const RANK_TEXT_WRAPPER_WIDTH = '63px';

export const rankTextWrapper = style([
  flexOptions({ option: 'center' }),
  {
    width: RANK_TEXT_WRAPPER_WIDTH,
  },
]);

export const rankLongTextWrapper = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    textSize: '1x',
  }),
  {
    width: RANK_TEXT_WRAPPER_WIDTH,
  },
]);
