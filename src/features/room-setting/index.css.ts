import { style } from '@vanilla-extract/css';

import { borderLightOptions, flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

import { MAP_ID_LIST } from '@/models/map';

export const modalTwoButtonWrapper = style([
  flexOptions({
    option: 'rowCenter',
  }),
  sprinkles({
    width: 'full',
  }),
]);

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

const MAP_ITEM_HEIGHT = '100px';

export const createLobbyMapList = style([
  sprinkles({
    gap: '3x',
  }),
  {
    display: 'grid',
    gridTemplateColumns: `repeat(${MAP_ID_LIST.length}, ${MAP_ITEM_HEIGHT})`,
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
    height: MAP_ITEM_HEIGHT,

    ':hover': {
      cursor: 'pointer',
    },
  },
]);

export const alertMessage = style([
  sprinkles({ fontSize: '0.75x', marginTop: '1.5x', color: 'red' }),
]);
