import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { backgroundColor, borderColor, borderSize, size } from './variants.css';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

const base = style([
  sprinkles({
    borderRadius: '2x',
    aspectRatio: 'square',
    position: 'relative',
  }),
  {
    overflow: 'hidden',
  },
]);

export const roundCornerImageBox = recipe({
  base,
  variants: {
    size,
    borderSize,
    borderColor,
    backgroundColor,
  },
});

export const image = style([
  sprinkles({
    position: 'absolute',
    height: 'full',
    zIndex: 'z-1',
    aspectRatio: 'square',
  }),
  {
    objectFit: 'cover',
    objectPosition: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
]);

export const contents = style([
  flexOptions({ option: 'column' }),
  sprinkles({
    paddingY: '2x',
    alignItems: 'center',
    position: 'relative',
    zIndex: 'z-2',
    height: 'full',
    aspectRatio: 'square',
  }),
  {
    boxSizing: 'border-box',
  },
]);
