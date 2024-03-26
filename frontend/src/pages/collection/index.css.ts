import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';
import { flexOptions } from '@/styles/common.css';
import * as constants from '@/pages/home/constants';

export const componentWrapper = style([
  flexOptions({ option: 'rowCenter' }),
  sprinkles({
    justifyContent: 'spaceAround',
  }),
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
