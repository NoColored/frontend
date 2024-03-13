import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { borderOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

export const imageBox = style([
  borderOptions({ width: '2x' }),
  sprinkles({
    borderRadius: '2x',
  }),
]);

const imageBoxVariants = {
  size: {
    small: style([
      borderOptions({ width: '2x' }),
      { width: '96px', height: '96px' },
    ]),
    large: style([
      borderOptions({ width: '5x' }),
      { width: '144px', height: '144px' },
    ]),
  },
  colorStyle: {
    black: style([sprinkles({ borderColor: 'black' })]),
    blue: style([sprinkles({ borderColor: 'blue' })]),
    pink: style([sprinkles({ borderColor: 'pink' })]),
    yellow: style([sprinkles({ borderColor: 'yellow' })]),
    green: style([sprinkles({ borderColor: 'green' })]),
  },
  borderLine: {
    none: style({ borderStyle: 'none' }),
    display: style({ borderStyle: 'solid' }),
  },
};

export const settingBox = recipe({
  base: imageBox,
  variants: imageBoxVariants,
});

export interface ImageBoxVariantsProps {
  size: keyof typeof imageBoxVariants.size;
  colorStyle: keyof typeof imageBoxVariants.colorStyle;
  borderLine: keyof typeof imageBoxVariants.borderLine;
}

export const img = style({
  objectFit: 'contain',
  width: '96px',
});
