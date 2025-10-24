import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from '@/pages/play/finder/constants';

import { borderLightOptions, flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

import { MAP_ID_LIST } from '@/constants/map';

export const modalTwoButtonWrapper = style([
  flexOptions({
    option: 'rowCenter',
  }),
  sprinkles({
    width: 'full',
  }),
]);

export const contentBox = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
]);

export const text = style([
  sprinkles({
    textSize: '1.5x',
    lineHeight: '2x',
  }),
]);

export const messageModalWrapper = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'spaceBetween',
});

export const messageText = recipe({
  base: [
    {
      whiteSpace: 'pre-wrap',
      textAlign: 'center',
    },
    flexOptions({ option: 'center' }),
    sprinkles({ marginBottom: '2x' }),
  ],
  variants: {
    messageType: {
      main: [
        sprinkles({
          fontSize: '2x',
          lineHeight: '3x',
        }),
      ],
      sub: sprinkles({
        textSize: '0.75x',
        color: 'gray',
      }),
    },
  },
});

export const createLobbyTextGrid = style([
  {
    display: 'grid',
    gridTemplateColumns: '65% 1fr',
    rowGap: '4px',
    columnGap: '12px',
  },
]);

export const createLobbyText = style([
  sprinkles({
    paddingX: '1x',
  }),
]);

export const createLobbySelectMap = style([
  flexOptions({ option: 'rowCenter' }),
  borderLightOptions({ color: 'black', width: '2x' }),
  sprinkles({
    borderRadius: '2x',
    padding: '4x',
    marginY: '2x',
    width: 'full',
  }),
]);

export const createLobbyMapList = style([
  sprinkles({
    gap: '3x',
  }),
  {
    display: 'grid',
    gridTemplateColumns: `repeat(${MAP_ID_LIST.length}, ${constants.MAP_ITEM_HEIGHT})`,
    gridTemplateRows: '1fr',
    width: '400px',
    overflowX: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: 'transparent transparent',

    ':hover': {
      scrollbarColor: '#dddddd transparent',
    },
  },
]);

export const mapItemWrapper = style([
  sprinkles({
    backgroundColor: 'white',
  }),
  {
    height: constants.MAP_ITEM_HEIGHT,

    ':hover': {
      cursor: 'pointer',
    },
  },
]);

export const alertMessage = style([
  sprinkles({ fontSize: '0.75x', marginTop: '1.5x', color: 'red' }),
]);
