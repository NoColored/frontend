import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { MODAL_INNER_WIDTH } from '@/components/modal/constants';
import { INPUT_TEXT_BOX_SIZE } from '@/components/textbox/InputTextBox/constants';

import * as constants from '@/pages/play/finder/constants';

import { borderLightOptions, flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/vars.css';

export const modalWrapper = style({
  width: MODAL_INNER_WIDTH,
  height: constants.MODAL_WRAPPER_HEIGHT,
});

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
    justifyContent: 'spaceBetween',
    textSize: '1.5x',
  }),
  {
    height: '100%',
  },
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
    gridTemplateRows: `${vars.fontSize[constants.CREATE_MODAL_FONT_SIZE]} ${INPUT_TEXT_BOX_SIZE.small.height}`,
    rowGap: '4px',
    columnGap: '12px',
  },
]);

export const createLobbyText = style([
  sprinkles({
    paddingX: constants.CREATE_MODAL_FONT_SIZE,
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
    gridTemplateColumns: `repeat(${constants.MAPS.length}, ${constants.MAP_ITEM_HEIGHT})`,
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
