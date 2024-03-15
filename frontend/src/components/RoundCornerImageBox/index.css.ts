import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from './constants.ts';

import { borderLightOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

const imageBoxBase = style([
  sprinkles({
    borderRadius: '2x',
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

const sizeVariants: {
  [size in (typeof constants.ROUNDCORNER_IMAGEBOX_SIZE)[number]]?: ReturnType<
    typeof style
  >;
} = {};

constants.ROUNDCORNER_IMAGEBOX_SIZE.forEach((size) => {
  sizeVariants[size] = style([
    {
      height: constants.ROUNDCORNER_IMAGEBOX_SIZE_PIXEL[size],
    },
  ]);
});

const backgroundColorVariants: {
  [color in (typeof constants.BACKGROUND_COLOR)[number]]?: ReturnType<
    typeof style
  >;
} = {};

constants.BACKGROUND_COLOR.forEach((color) => {
  backgroundColorVariants[color] = style([
    sprinkles({
      backgroundColor: color,
    }),
  ]);
});

const borderColorVariants: {
  [color in (typeof constants.BORDER_COLOR)[number]]?: ReturnType<typeof style>;
} = {};

constants.BORDER_COLOR.forEach((color) => {
  borderColorVariants[color] = style([borderLightOptions({ color })]);
});

const borderSizeVariants: {
  [size in (typeof constants.BORDER_WEIGHT)[number]]?: ReturnType<typeof style>;
} = {};

constants.BORDER_WEIGHT.forEach((size) => {
  borderSizeVariants[size] = style([borderLightOptions({ width: size })]);
});

const tierVariants: {
  [tier in (typeof constants.TIER_RANGE)[number]]?: ReturnType<typeof style>;
} = {};

constants.TIER_RANGE.forEach((tier) => {
  tierVariants[tier] = style({
    backgroundImage: `url('@/assets/ui/icon/tier/icon-tier-${tier}.svg')`,
  });
});
export const roundCornerImageBox = recipe({
  base: imageBoxBase,
  variants: {
    size: sizeVariants,
    tier: tierVariants,
    borderSize: borderSizeVariants,
    borderColor: borderColorVariants,
    backgroundColor: backgroundColorVariants,
  },
});
