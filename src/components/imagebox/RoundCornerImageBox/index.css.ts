import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from '../constants';

import type {
  imageboxBackgroundColorType,
  imageboxBorderColorType,
  immageboxBorderWeightType,
} from '@/components/imagebox/types';

import { borderLightOptions, flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';
import { variant } from '@/styles/utils';

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

const size = variant(constants.IMAGEBOX_SIZE, ([_, height]) =>
  style({
    height,
  }),
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
    size,
    borderSize: borderSizeVariants,
    borderColor: borderColorVariants,
    backgroundColor: backgroundColorVariants,
  },
});
