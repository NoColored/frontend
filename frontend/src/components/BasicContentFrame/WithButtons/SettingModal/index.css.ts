import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';
import { flexOptions } from '@/styles/common.css';
import { vars } from '@/styles/vars.css';
import { AUDIO_SIZE } from '@/components/BasicContentFrame/WithButtons/SettingModal/constants';

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

export const audioBox = style([
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

export const audioText = style([
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

export const inputBoxYMargin = style([
  sprinkles({
    marginY: '4x',
  }),
]);
