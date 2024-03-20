import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';
import { flexOptions } from '@/styles/common.css';
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

export const audioBox = style([
  sprinkles({
    position: 'relative',
  }),
  {
    boxSizing: 'border-box',
    width: '434px',
    height: '72px',
    top: '17px',
    background: vars.colors.white,
    border: `2px solid ${vars.colors.gray700}`,
    borderRadius: vars.borderRadius['2x'],
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
    top: -17,
    left: 30,
  },
]);

export const audioContentWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  {
    height: '100%',
  },
]);

export const audioButtonWrapper = style([flexOptions({ option: 'rowCenter' })]);

export const textXMargin = style([
  sprinkles({
    marginX: '4x',
  }),
]);

export const underButtonWrapper = style([
  flexOptions({ option: 'rowCenter' }),
  {
    marginTop: '16px',
  },
]);

export const inputBoxYMargin = style([
  sprinkles({
    marginY: '4x',
  }),
]);
