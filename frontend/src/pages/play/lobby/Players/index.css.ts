import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from '@/pages/play/lobby/constants';
import type { playerColorType } from '@/pages/play/lobby/types';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const playerWrapper = style([
  flexOptions({ option: 'row' }),
  sprinkles({
    backgroundColor: 'navy',
    borderRadius: '2x',
    padding: '2x',
  }),
  {
    height: constants.PLAYER_WRAPPER_HEIGHT,
  },
]);

export const error = style([
  flexOptions({ option: 'columnCenter' }),
  playerWrapper,
  {
    color: 'white',
    fontSize: '24px',
    lineHeight: '32px',
    textAlign: 'center',
  },
]);

export const characterWrapper = style([
  {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: '50% 50%',
    height: '100%',
    aspectRatio: '1 / 1',
    width: 'min-content',
  },
]);

export const infoAndButtonWrapper = style([
  flexOptions({ option: 'column' }),
  sprinkles({
    margin: '1x',
    width: 'full',
  }),
  {
    justifyContent: 'space-between',
  },
]);

export const playerInfoWrapper = style([
  sprinkles({
    width: 'full',
  }),
]);

// Info.tsx
const playerInfo = style([
  flexOptions({ option: 'row' }),
  sprinkles({
    marginBottom: '1x',
    width: 'full',
    borderRadius: '2x',
  }),
  {
    height: constants.PLAYER_INFO_HEIGHT('default'),
    padding: constants.PLAYER_INFO.default.padding,

    '@media': {
      'screen and (max-height: 415px)': {
        height: constants.PLAYER_INFO_HEIGHT('small'),
        padding: constants.PLAYER_INFO.small.padding,
      },
    },
  },
]);

const backgroudColorVariant = constants.PLAYER_COLORS.reduce(
  (colorVariants, color) => {
    colorVariants[color] = style([sprinkles({ backgroundColor: color })]);
    return colorVariants;
  },
  {} as Record<playerColorType, ReturnType<typeof style>>,
);

export const playerInfoColored = recipe({
  base: playerInfo,
  variants: {
    color: backgroudColorVariant,
  },
});

export const titleAndName = style([
  sprinkles({
    paddingLeft: '1x',
  }),
]);

export const title = style([
  {
    fontSize: constants.PLAYER_INFO.default.titleSize,
    lineHeight: constants.PLAYER_INFO.default.titleSize,

    '@media': {
      'screen and (max-height: 415px)': {
        fontSize: constants.PLAYER_INFO.small.titleSize,
        lineHeight: constants.PLAYER_INFO.small.titleSize,
      },
    },
  },
]);

export const name = style([
  sprinkles({
    color: 'white',
  }),
  {
    fontSize: constants.PLAYER_INFO.default.nameSize,
    lineHeight: constants.PLAYER_INFO.default.nameSize,

    '@media': {
      'screen and (max-height: 415px)': {
        fontSize: constants.PLAYER_INFO.small.nameSize,
        lineHeight: constants.PLAYER_INFO.small.nameSize,
      },
    },
  },
]);

export const playerInfoGray = style([
  playerInfo,
  sprinkles({
    backgroundColor: 'gray300',
    display: 'block',
  }),
  {
    textAlign: 'center',
    color: 'white',
    fontSize: constants.PLAYER_INFO.default.questionMarkSize,
    lineHeight: constants.PLAYER_INFO.default.questionMarkSize,

    '@media': {
      'screen and (max-height: 415px)': {
        fontSize: constants.PLAYER_INFO.small.questionMarkSize,
        lineHeight: constants.PLAYER_INFO.small.questionMarkSize,
      },
    },
  },
]);

// Chraracter.tsx
const outlineColorVariants = [
  ...constants.PLAYER_COLORS,
  constants.EMPTY_PLAYER_COLOR,
].reduce(
  (variants, color) => {
    variants[color] = style([sprinkles({ outlineColor: color })]);
    return variants;
  },
  {} as Record<playerColorType, ReturnType<typeof style>>,
);

export const character = recipe({
  base: style([
    sprinkles({
      margin: '2x',
      outlineStyle: 'solid',
      outlineWidth: '5x',
      borderRadius: '2x',
    }),
    {
      overflow: 'hidden',
    },
  ]),
  variants: {
    color: outlineColorVariants,
  },
});

// State.tsx
export const empty = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    textSize: '2x',
    height: 'full',
    color: 'gray300',
  }),
]);
