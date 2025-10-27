import { style } from '@vanilla-extract/css';

import { flexOptions, sprinkles } from '@/shared/styles';

export const matchingModalWrapper = style([
  flexOptions({ option: 'columnCenter' }),
]);

export const matchingMessage = style([
  flexOptions({ option: 'row' }),
  sprinkles({
    textSize: '2x',
    justifyContent: 'flexStart',
    width: 'full',
    marginBottom: '1x',
    paddingLeft: '4x',
  }),
]);

export const matchingImageWrapper = style([
  sprinkles({
    marginY: '2x',
  }),
]);
