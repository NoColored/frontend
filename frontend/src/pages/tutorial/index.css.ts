import { style } from '@vanilla-extract/css';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const left = style([
  sprinkles({
    position: 'absolute',
  }),
  {
    left: '0',
  },
]);

export const right = style([
  sprinkles({
    position: 'absolute',
  }),
  {
    right: '0',
  },
]);

export const container = style([
  flexOptions({ option: 'columnCenter' }),
  sprinkles({ height: 'full', position: 'relative' }),
]);

export const title = style([
  sprinkles({
    textSize: '2x',
  }),
]);

export const text = style([
  sprinkles({
    textSize: '1.25x',
    marginY: '4x',
  }),
]);

export const mapImage = style([
  {
    height: '50%',
  },
]);

export const wrapper = style([
  flexOptions({ option: 'rowCenter' }),
  sprinkles({
    marginTop: '2x',
    marginX: '4x',
  }),
]);

export const button = style([sprinkles({ marginX: '1x' }), { height: '32px' }]);
