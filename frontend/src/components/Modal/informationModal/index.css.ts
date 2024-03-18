import { style } from '@vanilla-extract/css';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { IMG_SIZE } from './constants';

export const boxWrapper = style([flexOptions({ option: 'columnCenter' })]);

export const buttonWrapper = style([flexOptions({ option: 'center' })]);

export const text = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    textSize: '2x',
    paddingBottom: '4x',
  }),
]);

export const infoText = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    textSize: '1x',
    marginBottom: '2x',
  }),
]);

export const mapBackground = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    marginBottom: '1x',
  }),
  {
    width: IMG_SIZE.background.width,
    height: IMG_SIZE.background.height,
    maxHeight: '100%',
  },
]);

export const imageStyle = style([
  sprinkles({
    marginBottom: '1x',
  }),
  {
    maxWidth: '100%',
    maxHeight: '100%',
  },
]);

export const buttonStyle = style({
  width: IMG_SIZE.button.width,
  height: IMG_SIZE.button.height,
});
