import { style } from '@vanilla-extract/css';

import * as styleOptions from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

export const testForRecipe = style([
  styleOptions.flexOptions({
    option: 'center',
  }),
  styleOptions.borderOptions({
    color: 'red',
    width: '1x',
  }),
  sprinkles({
    fontFamily: 'textFont',
    fontSize: '2x',
    paddingX: '2x',
  }),
  {
    // 임시로 값 설정
    width: '300px',
    height: '100px',
  },
]);
