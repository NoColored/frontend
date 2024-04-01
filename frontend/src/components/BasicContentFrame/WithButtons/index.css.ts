import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import * as constants from '@/components/BasicContentFrame/constants';
import { basicFrame } from '@/components/BasicContentFrame/index.css';

import { borderDarkOptions, flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const frame = style([
  basicFrame,
  sprinkles({
    padding: '4x',
  }),
  {
    minHeight: constants.MIN_FRAME_HEIGHT_WITH_PADDING,
    height: `${calc('100%').subtract('32px')}`,
    aspectRatio: '33 / 19',
    boxSizing: 'content-box',

    '@media': {
      'screen and (min-height: 463px)': {
        boxSizing: 'border-box',
        height: constants.MAX_FRAME_HEIGHT,
      },
    },
  },
]);

export const iconButtons = style([
  sprinkles({
    display: 'flex',
    position: 'absolute',
    zIndex: 'z-1',
  }),
  {
    right: '24px',
    top: '8px',

    '@media': {
      'screen and (min-height: 463px)': {
        top: '-8px',
        right: '8px',
      },
    },
  },
]);

export const main = style([
  borderDarkOptions({ color: 'black', width: '1x' }),
  sprinkles({
    position: 'relative',
    borderRadius: '2x',
    backgroundColor: 'background',
    padding: '4x',
    size: 'full',
  }),
  {
    height: '100%',
    aspectRatio: '33 / 19',

    '@media': {
      'screen and (min-height: 463px)': {
        border: 'none',
        backgroundColor: 'transparent',
        padding: '0',
      },
    },
  },
]);

export const navigation = style([
  {
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    '@media': {
      'screen and (min-height: 463px)': {
        top: '-16px',
        left: '-16px',
      },
    },
  },
]);

// SettingButton.tsx
export const title = style([
  sprinkles({
    textSize: '2x',
  }),
]);

export const wrapper = style([
  flexOptions({ option: 'columnCenter' }),
  {
    justifyContent: 'space-between',
  },
]);
