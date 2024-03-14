import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { COLOR, COLOR_DARK } from '@/components/button/button-data.ts';

import { flexOptions } from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';
import { vars } from '@/styles/vars.css.ts';

const colorVariants: {
  [colorItem: string]: ReturnType<typeof style>;
} = {
  '': style([]),
};

COLOR.forEach((colorItem) => {
  const darkColor: COLOR_DARK = COLOR_DARK[colorItem];
  colorVariants[colorItem] = style([
    sprinkles({
      backgroundColor: colorItem,
      borderColor: darkColor,
    }),
    {
      ':active': {
        backgroundColor: vars.colors[darkColor as keyof typeof vars.colors],
      },
    },
  ]);
});

const sizeVariants = {
  medium: style([
    sprinkles({
      fontSize: '1.5x',
    }),
    {
      width: '163px',
      height: '96px',
      paddingTop: '4x',
    },
  ]),
  large: style([
    sprinkles({
      fontSize: '2x',
    }),
    {
      width: '190px',
      height: '96px',
    },
  ]),
  xlarge: style([
    sprinkles({
      paddingTop: '2x',
      fontSize: '2x',
    }),
    {
      width: '292px',
      height: '120px',
    },
  ]),
};

export const coloredIconButtonStyle = recipe({
  base: style([
    flexOptions({
      option: 'columnCenter',
    }),
    sprinkles({
      color: 'white',
      fontFamily: 'textFont',
      borderStyle: 'solid',
      borderRadius: '2x',
      borderWidth: '4x',
      paddingBottom: '2x',
    }),
    {
      transition: 'all 0.2s',
    },
  ]),
  variants: {
    color: colorVariants,
    size: sizeVariants,
  },
});

// 여기서부터 버튼 내부 스타일

export const iconStyle = style([
  flexOptions({
    option: 'center',
  }),
  sprinkles({
    position: 'relative',
  }),
  {
    height: '40px',
    width: '40px',
  },
]);

export const textStyle = style([
  flexOptions({
    option: 'center',
  }),
  sprinkles({ position: 'relative' }),
  {
    height: '100%',
    width: '100%',
  },
]);
