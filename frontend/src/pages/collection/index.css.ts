import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';
import { flexOptions } from '@/styles/common.css';
import * as constants from '@/pages/home/constants';

export const componentWrapper = style([
  flexOptions({ option: 'rowCenter' }),
  sprinkles({}),
  {
    height: '40vh', // 뷰포트 높이의 100%로 설정하여 전체 화면을 차지하게 함
  },
]);

export const firstComponentStyle = style({
  flex: 4,
});

export const secondComponentStyle = style([
  {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 6,
    maxHeight: '350px',
    overflowY: 'auto',
  },
]);

export const categoryButton = style([
  flexOptions({ option: 'rowCenter' }),
  {
    gap: '16px',
  },
]);

export const titleText = style([
  sprinkles({
    fontWeight: 'accent',
    textSize: '1x',
  }),
  {
    textAlign: 'center',
    // backgroundImage: `linear-gradient(to right, ${vars.colors.red}, ${vars.colors.yellow}, ${vars.colors.green}, ${vars.colors.blue}, ${vars.colors.pink})`,
  },
]);

export const CharacterBox = style([
  flexOptions({ option: 'column' }),
  sprinkles({
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

    maxWidth: constants.CHARACTER_SIZE_HEGITH.MAX,
    flexGrow: 1,
    minWidth: constants.CHARACTER_SIZE_HEGITH.MIN,
  },
]);

export const imageBoxWrapper = style([
  sprinkles({ padding: '3x' }),
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '8px',
  },
]);
