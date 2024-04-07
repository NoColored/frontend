import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import * as constants from './constants';

import { borderDarkOptions, flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const lobby = style([
  {
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    height: '100%',
    width: calc('100%').subtract('16px').toString(),
    gap: '16px',
  },
]);

export const settings = style([
  flexOptions({ option: 'column' }),
  {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
]);

export const code = style([
  sprinkles({
    textSize: '2x',
    marginTop: '4x',
    marginBottom: '2x',
  }),
]);

export const lobbyInfo = style([flexOptions({ option: 'column' })]);

export const lobbyTitle = style([
  sprinkles({
    textSize: constants.TITLE_SIZE,
    marginBottom: constants.TITLE_MARGIN_BOTTOM,
  }),
]);

// SettingButton.tsx
export const icon = style([
  {
    width: '16px',
    height: '16px',
    marginRight: '4px',
  },
]);

export const button = style([
  flexOptions({ option: 'row' }),
  borderDarkOptions({ color: 'navy', width: '2x' }),
  sprinkles({
    backgroundColor: 'navy',
    color: 'white',
    borderRadius: '2x',
    paddingY: '2x',
    paddingRight: '3x',
    paddingLeft: '2x',
  }),
  {
    overflow: 'hidden',
  },
]);

export const text = style([
  {
    height: '16px',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
]);

// MapInfo.tsx
export const mapInfo = style([
  sprinkles({
    marginTop: '4x',
  }),
  {
    height: '90px',
    aspectRatio: '1 / 1',
  },
]);
