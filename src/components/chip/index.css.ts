import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from './variants.css';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

const base = style([
  flexOptions({
    option: 'center',
  }),
  sprinkles({
    fontFamily: 'textFont',
    textSize: '1x',
    paddingY: '1x',
    paddingX: '3x',
    color: 'white',
    borderRadius: '4x',
  }),
  {
    width: 'fit-content',
    height: 'fit-content',
    objectFit: 'cover',
  },
]);

const responsive = {
  true: style([
    {
      '@media': {
        'screen and (max-height: 380px)': {
          fontSize: '12px',
          lineHeight: '12px',
          padding: '4px 8px',
        },
      },
    },
  ]),
};

export const chip = recipe({
  base,
  variants: {
    color,
    responsive,
  },
});

export const icon = style([
  flexOptions({
    option: 'center',
  }),
  sprinkles({
    marginRight: '0.5x',
  }),
  {
    width: '16px',
    height: '16px',

    '@media': {
      'screen and (max-height: 380px)': {
        width: '12px',
        height: '12px',
      },
    },
  },
]);
