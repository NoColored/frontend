import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { borderOptions, flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';


const imageBoxBase = style([
  sprinkles({
    borderRadius: '2x',
  }),
  {
    overflow: 'hidden',
  },
]);

const sizeVariants = {

}

export const roundCornerImageBox = recipe({
  base: imageBoxBase,
  variants: {
    size:
    tier:
    borderSize:
    borderColor:
    backgroundColor:
  }
})




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
    none: { borderStyle: 'none' },
    display: { borderStyle: 'solid' },
  },
  backgroundStyle: {
    none: { backgroundColor: 'none' },
    white: { backgroundColor: 'white' },
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
  backgroundStyle: keyof typeof imageBoxVariants.backgroundStyle;
}

export const image = style([
  {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
]);
