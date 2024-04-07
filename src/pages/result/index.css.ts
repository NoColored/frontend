import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from './constants';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const gameResultWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({
    justifyContent: 'spaceBetween',
    height: 'full',
    paddingY: '4x',
  }),
]);

export const result = style([flexOptions({ option: 'columnCenter' })]);

export const resultTitle = style([
  sprinkles({
    marginTop: '4x',
    fontFamily: 'numFont',
    color: 'white',
  }),
  {
    height: constants.RESULTTEXT_HEIGHT,
    fontSize: constants.RESULTTEXT_SIZE,
    textShadow: constants.RESULTTEXT_BORDER,
    '@media': {
      'screen and (max-height: 365px)': {
        marginTop: constants.MEDIA_RESULTTEXT_MARGIN_TOP,
        marginBottom: constants.MEDIA_RESULTTEXT_MARGIN_HEIGHT,
        fontSize: constants.MEDIA_RESULTTEXT_SIZE,
      },
    },
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
      justifyContent: 'spaceBetween',
      borderStyle: 'solid',
      borderWidth: '3x',
      borderRadius: '2x',
      paddingX: '4x',
      marginY: '1x',
    }),
    {
      height: constants.RANKINGINFOBOX_HEIGHT,
      width: constants.RANKINGINFOBOX_WIDTH,
      boxSizing: 'border-box',
      overflow: 'hidden',
      '@media': {
        'screen and (max-height: 400px)': {
          height: constants.MEDIA_RANKINGINFOBOX_HEIGHT,
          width: constants.MEDIA_RANKINGINFOBOX_WIDTH,
          marginBottom: constants.MEDIA_RANKINGINFOBOX_MARGIN,
        },
      },
    },
  ],
  variants: {
    myResult: {
      true: [
        sprinkles({
          color: 'white',
          textSize: '2x',
          marginY: '2x',
        }),
        {
          paddingLeft: '5%',
          paddingRight: '5%',
          height: constants.FIRSTRANKINGINFOBOX_HEIGHT,
          width: constants.FIRSTRANKINGINFOBOX_WIDTH,
          '@media': {
            'screen and (max-height: 400px)': {
              height: constants.MEDIA_FIRSTRANKINGINFOBOX_HEIGHT,
              width: constants.MEDIA_FIRSTRANKINGINFOBOX_WIDTH,
              marginBottom: constants.MEDIA_FIRSTRANKINGINFOBOX_MARGIN,
            },
          },
        },
      ],
    },
    colorStyle: {
      pink: sprinkles({
        borderColor: 'pink',
      }),
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
  compoundVariants: [
    {
      variants: { myResult: true, colorStyle: 'pink' },
      style: sprinkles({
        backgroundColor: 'pink',
      }),
    },
    {
      variants: { myResult: true, colorStyle: 'yellow' },
      style: sprinkles({
        backgroundColor: 'yellow',
      }),
    },
    {
      variants: { myResult: true, colorStyle: 'green' },
      style: sprinkles({
        backgroundColor: 'green',
      }),
    },
    {
      variants: { myResult: true, colorStyle: 'blue' },
      style: sprinkles({
        backgroundColor: 'blue',
      }),
    },
  ],
});

export const modalWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({
    width: 'full',
    height: 'full',
  }),
]);
export const ribbonWrapper = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    position: 'relative',
    width: 'full',
  }),
]);

export const tierRibbon = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    position: 'absolute',
    width: 'full',
  }),
]);

export const tierRibbonImage = style({ width: '36%' });
export const diamond = style([
  flexOptions({ option: 'center' }),
  sprinkles({ marginTop: '1x' }),
]);

export const rewardBox = style([
  flexOptions({ option: 'center' }),
  sprinkles({ marginBottom: '4x' }),
]);

export const tierDiamondImage = style([
  {
    width: '43%',
  },
]);

export const tierUpgradeWrapper = style([
  flexOptions({ option: 'rowCenter' }),
  sprinkles({ marginTop: '4x', marginBottom: '1x' }),
  { width: '60%' },
]);

export const modalMessage = style([
  sprinkles({ marginTop: '2x', marginBottom: '1x', fontSize: '1.25x' }),
]);

export const rewardRibbon = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    position: 'absolute',
    width: 'full',
    marginBottom: '4x',
  }),
]);

export const rewardListWrapper = style([
  flexOptions({ option: 'rowCenter' }),
  sprinkles({
    marginTop: '4x',
    marginBottom: '1.5x',
    justifyContent: 'spaceAround',
  }),
  {
    width: '90%',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  },
]);

export const rewardScrollItem = style([
  sprinkles({
    marginX: '1x',
  }),
  {
    flex: '0 0 auto',
  },
]);

export const rewardBoxImage = style([{ width: '32%' }]);

export const playerInfoBoxWrapper = style([
  sprinkles({
    display: 'flex',
    justifyContent: 'flexStart',
  }),
  {
    width: constants.PLAYERINFOBOX_WIDTH,
  },
]);

export const score = style([
  {
    width: '80px',
    textAlign: 'center',
  },
]);
