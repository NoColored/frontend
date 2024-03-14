import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import * as constants from '@/components/textbox/constants.ts';

import { sprinkles } from '@/styles/sprinkles.css.ts';

// 선택지를 위한 객체 선언
const colorVariants: {
  [colorItem in (typeof constants.TEXTBOX_COLOR)[number]]?: ReturnType<
    typeof style
  >;
} = {};

// 객체에 값 할당
// 상수 배열에 선언한 값들을 전부 관리하기 위해 반복문 사용
constants.TEXTBOX_COLOR.forEach((colorItem) => {
  colorVariants[colorItem] = style([
    sprinkles({
      color: colorItem,
    }),
  ]);
});

// 실제 스타일 선언부
export const textStyle = recipe({
  base: sprinkles({
    fontFamily: 'textFont',
  }),
  variants: {
    textPosition: {
      label: sprinkles({
        fontSize: '0.5x',
      }),
      title: sprinkles({
        fontSize: '1x',
      }),
    },
    color: colorVariants,
  },
});
