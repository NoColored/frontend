import { style } from '@vanilla-extract/css';

import { flexOptions, sprinkles } from '@/shared/styles';

export const centerBoxWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  {
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
  },
]);

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
    marginBottom: '4x',
  }),
]);

export const settingButtonWrapper = style([
  sprinkles({
    display: 'grid',
    columnGap: '2x',
  }),
  {
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
  },
]);
