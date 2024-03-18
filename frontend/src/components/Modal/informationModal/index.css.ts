import { style } from '@vanilla-extract/css';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

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
  {
    width: '320px',
    height: '160px',
    marginBottom: '8px',
  },
]);

export const imageStyle = style({
  maxWidth: '100%',
  maxHeight: '100%',
  marginBottom: '8px',
});

export const buttonStyle = style({
  width: '34px',
  height: '25px',
});
