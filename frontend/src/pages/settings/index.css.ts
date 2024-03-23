import { style } from '@vanilla-extract/css';

import { AUDIO_SIZE } from '@/pages/settings/constants';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { vars } from '@/styles/vars.css';

export const boxWrapper = style([flexOptions({ option: 'columnCenter' })]);

export const buttonWrapper = style([flexOptions({ option: 'center' })]);

export const text = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    textSize: '1.5x',
    paddingBottom: '2x',
  }),
]);

export const title = style([
  flexOptions({ option: 'center' }),
  sprinkles({
    textSize: '2x',
    paddingBottom: '2x',
  }),
]);
style([
  sprinkles({
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: '2x',
  }),
  {
    boxSizing: 'border-box',
    border: `2px solid ${vars.colors.gray700}`,
    width: AUDIO_SIZE.box.width,
    height: AUDIO_SIZE.box.height,
    top: AUDIO_SIZE.box.top,
  },
]);

export const fieldSetBorder = style([
  sprinkles({
    borderRadius: '2x',
    padding: '4x',
  }),
  {
    border: `3px solid ${vars.colors.gray700}`,
  },
]);

export const legendText = style([
  sprinkles({
    marginLeft: '2x',
    paddingX: '2x',
    position: 'relative',
  }),
  {
    textAlign: 'left',
  },
]);
style([
  sprinkles({
    position: 'absolute',
    borderRadius: '4x',
    padding: '2x',
    backgroundColor: 'white',
  }),
  {
    top: AUDIO_SIZE.text.top,
    left: AUDIO_SIZE.text.left,
  },
]);

export const audioContentWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({
    height: 'full',
  }),
]);

export const audioButtonWrapper = style([flexOptions({ option: 'rowCenter' })]);

export const textXMargin = style([
  sprinkles({
    marginX: '4x',
  }),
]);

export const underButtonWrapper = style([
  flexOptions({ option: 'rowCenter' }),
  sprinkles({
    marginTop: '4x',
  }),
]);
