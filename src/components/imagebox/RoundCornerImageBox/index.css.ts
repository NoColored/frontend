import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from '../constants';

import type {
  imageboxBackgroundColorType,
  imageboxBorderColorType,
  immageboxBorderWeightType,
  tierSizeType,
} from '@/components/imagebox/types';

import { borderLightOptions, flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

const imageBoxBase = style([
  flexOptions({ option: 'column' }),
  sprinkles({
    borderRadius: '2x',
    paddingY: '2x',
    alignItems: 'center',
  }),
  {
    overflow: 'hidden',
    aspectRatio: '1 / 1',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'border-box',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
]);

const sizeVariants = Object.keys(constants.IMAGEBOX_SIZE).reduce(
  (variants, sizeKey) => {
    const size = sizeKey as tierSizeType;
    variants[size] = style([
      {
        height: constants.IMAGEBOX_SIZE[size],
      },
    ]);
    return variants;
  },
  {} as Record<tierSizeType, ReturnType<typeof style>>,
);

const backgroundColorVariants = constants.BACKGROUND_COLOR.reduce(
  (variants, color) => {
    variants[color] = sprinkles({ backgroundColor: color });
    return variants;
  },
  {} as Record<imageboxBackgroundColorType, ReturnType<typeof style>>,
);

const borderColorVariants = constants.BORDER_COLOR.reduce(
  (variants, color) => {
    variants[color] = style([borderLightOptions({ color })]);
    return variants;
  },
  {} as Record<imageboxBorderColorType, ReturnType<typeof style>>,
);

const borderSizeVariants = constants.BORDER_WEIGHT.reduce(
  (variants, size) => {
    variants[size] = style([borderLightOptions({ width: size })]);
    return variants;
  },
  {} as Record<immageboxBorderWeightType, ReturnType<typeof style>>,
);

export const roundCornerImageBox = recipe({
  base: imageBoxBase,
  variants: {
    size: sizeVariants,
    borderSize: borderSizeVariants,
    borderColor: borderColorVariants,
    backgroundColor: backgroundColorVariants,
  },
});
