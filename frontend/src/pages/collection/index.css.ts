import { style } from '@vanilla-extract/css';

import * as constants from './constatns';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const gridBox = style({
  display: 'grid',
  gridTemplateColumns: '35% 65%',
  gridTemplateRows: '15% 1fr',
  gridTemplateAreas: `
    ". a"
    "b c"
  `,
  height: '100%',
  overflow: 'hidden',
});

export const characterWrapper = style({
  gridArea: 'b',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

export const character = style([
  sprinkles({
    width: 'full',
  }),
]);

export const collections = style([
  sprinkles({
    borderRadius: '2x',
  }),
  {
    gridArea: 'c',
    backgroundColor: 'rgba(0,0,0,0.7)',
    overflowY: 'auto',
    maxHeight: constants.COLLECTIONS.MAX_HEIGHT,
  },
]);

export const categoryButton = style([
  {
    gridArea: 'a',
    gap: constants.CATEGORY_BUTTON_GAP,
  },
]);

export const label = style([
  sprinkles({
    fontWeight: 'accent',
    textSize: '1x',
    width: 'full',
  }),
  {
    position: 'absolute',
    textAlign: 'center',
    top: '15%',
  },
]);

export const mySkin = style([
  flexOptions({ option: 'column' }),
  sprinkles({
    width: 'full',
  }),
  {
    position: 'relative',
    overflow: 'hidden',
    aspectRatio: '1 / 1',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'border-box',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
]);

export const submitButtonWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  {
    position: 'relative',
    marginTop: constants.SUBMIT_BUTTON_MARGIN,
  },
]);

export const skinWrapper = style([
  sprinkles({ padding: '3x' }),
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: constants.GRID_GAP,
    maxHeight: '350px',
    '@media': {
      'screen and (max-height: 450px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    },
  },
]);

export const achieveBoxWrapper = style([
  sprinkles({ padding: '4x' }),
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: constants.GRID_GAP,
  },
]);

export const boxStyle = style([
  sprinkles({
    width: 'full',
  }),
  {
    boxSizing: 'border-box',
    height: constants.BOX_STYLE.HEIGHT,
    border: constants.BOX_STYLE.BORDER,
    borderRadius: constants.BOX_STYLE.BORDER_RADIUS,
  },
]);

export const achievedBox = style({
  background: 'rgba(26, 130, 153, 0.5)',
});

export const notAchievedBox = style({
  background: 'gray',
});

export const labelBoxStyle = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({
    width: 'full',
  }),
  {
    boxSizing: 'border-box',
    height: constants.LABEL_BOX_STYLE.HEIGHT,
    border: constants.LABEL_BOX_STYLE.BORDER,
    borderRadius: constants.LABEL_BOX_STYLE.BORDER_RADIUS,
  },
]);

export const nameSize = style([
  sprinkles({
    padding: '3x',
  }),
  {
    color: 'white',
    textAlign: 'center',
    fontSize: constants.NAME_SIZE.FONT_SIZE,
    wordSpacing: constants.NAME_SIZE.WORD_SPACING,
    '@media': {
      'screen and (max-height: 450px)': {
        fontSize: constants.NAME_SIZE.SMALL_FONT_SIZE,
        lineHeight: constants.NAME_SIZE.SMALL_LINE_HEIGHT,
      },
    },
  },
]);

export const rewardSize = style({
  color: 'white',
  textAlign: 'center',
  fontSize: constants.REWARD_SIZE.FONT_SIZE,
  wordSpacing: constants.REWARD_SIZE.WORD_SPACING,
  lineHeight: constants.REWARD_SIZE.LINE_HEIGHT,
  '@media': {
    'screen and (max-height: 450px)': {
      fontSize: constants.REWARD_SIZE.SMALL_FONT_SIZE,
      lineHeight: constants.REWARD_SIZE.SMALL_LINE_HEIGHT,
    },
  },
});

export const mosaicBox = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({
    width: 'full',
    height: 'full',
  }),
]);

export const mosaic = style({
  backgroundColor: 'black',
  width: '65%',
  height: '20%',
});
