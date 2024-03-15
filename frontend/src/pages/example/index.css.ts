import { style } from '@vanilla-extract/css';

import * as styleOptions from '@/styles/common.css.ts';
import { sprinkles } from '@/styles/sprinkles.css.ts';

export const testForRecipe = style([
  // 임의 설정한 option들을 배열에 등록
  styleOptions.flexOptions({
    option: 'center',
  }),
  styleOptions.borderDarkOptions({
    color: 'red',
    width: '5x',
  }),
  // 추가적인 디테일은 sprinkles에서 사용
  sprinkles({
    fontFamily: 'textFont',
    fontSize: '2x',
    paddingX: '2x',
  }),
  // 그외 추가 값
  {
    // 임시로 값 설정
    width: '300px',
    height: '100px',
  },
]);
