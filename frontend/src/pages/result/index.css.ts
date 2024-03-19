import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from './constants';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const gameResultWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({
    width: 'full',
    height: 'full',
    justifyContent: 'spaceAround',
  }),
]);

export const resultTextWrapper = style([
  sprinkles({
    marginY: '4x',
    fontFamily: 'textFont',
  }),
  {
    height: constants.RESULTTEXT_HEIGHT,
    fontSize: constants.RESULTTEXT_SIZE,
  },
]);

export const buttonWrapper = style([
  flexOptions({ option: 'rowCenter' }),
  sprinkles({
    justifyContent: 'spaceAround',
  }),
]);

export const resultInfoBox = recipe({
  base: [
    flexOptions({ option: 'rowCenter' }),
    sprinkles({
      backgroundColor: 'white',
      fontSize: '1.5x',
      justifyContent: 'spaceAround',
      borderStyle: 'solid',
      borderWidth: '3x',
      borderRadius: '2x',
      paddingX: '4x',
      marginY: '0.5x',
    }),
    {
      height: constants.RANKINGINFOBOX_HEIGHT,
      width: constants.RANKINGINFOBOX_WIDTH,
      boxSizing: 'border-box',
      overflow: 'hidden',
    },
  ],
  variants: {
    firstResult: {
      true: [
        sprinkles({
          color: 'white',
          fontSize: '2x',
          marginY: '1x',
        }),
        {
          paddingLeft: '5%',
          paddingRight: '5%',
          height: constants.FIRSTRANKINGINFOBOX_HEIGHT,
          width: constants.FIRSTRANKINGINFOBOX_WIDTH,
        },
      ],
    },
    colorStyle: {
      pink: [
        sprinkles({
          borderColor: 'pink',
          backgroundColor: 'pink',
        }),
      ],
      yellow: sprinkles({
        borderColor: 'yellow',
      }),
      green: sprinkles({
        borderColor: 'green',
      }),
      blue: sprinkles({
        borderColor: 'blue',
      }),
    },
  },
});
