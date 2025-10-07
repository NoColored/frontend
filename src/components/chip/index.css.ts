import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { variant } from '@/styles/utils';

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

export const color = variant(
  ['red', 'yellow', 'green', 'blue', 'pink', 'navy'] as const,
  (backgroundColor) =>
    sprinkles({
      backgroundColor,
    }),
);

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

const chip = recipe({
  base,
  variants: {
    color,
    responsive,
  },
});

const icon = style([
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

export const styles = {
  chip,
  icon,
};
