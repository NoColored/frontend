import { style } from '@vanilla-extract/css';

import * as constants from './constatns';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const componentWrapper = style([flexOptions({ option: 'rowCenter' })]);

export const firstComponentStyle = style({
  flex: 4,
});

export const secondComponentStyle = style([
  {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 6,
    maxHeight: constants.SECOND_COMPONENT_MAX_HEIGHT,
    overflowY: 'auto',
  },
]);

export const categoryButton = style([
  flexOptions({ option: 'rowCenter' }),
  {
    gap: constants.CATEGORY_BUTTON_GAP,
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
    position: 'relative',
    overflow: 'hidden',
    aspectRatio: '1 / 1',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'border-box',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    top: '-20px',
    right: '-10px',
    maxWidth: constants.CHARACTER_SIZE_HEGIHT.MAX,
    flexGrow: 1,
    minWidth: constants.CHARACTER_SIZE_HEGIHT.MIN,
  },
]);

export const submitButtonWrapper = style([
  flexOptions({ option: 'columnCenter' }),
  {
    position: 'relative',
    right: constants.SUBMIT_BUTTON_RIGHT,
  },
]);

export const imageBoxWrapper = style([
  sprinkles({ padding: '3x' }),
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: constants.EIGHT_GAP,
  },
]);

export const achieveBoxWrapper = style([
  sprinkles({ padding: '4x' }),
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: constants.EIGHT_GAP,
  },
]);

export const boxStyle = style({
  boxSizing: 'border-box',
  width: constants.BOX_STYLE.WIDTH,
  height: constants.BOX_STYLE.HEIGHT,
  border: constants.BOX_STYLE.BORDER,
  borderRadius: constants.BOX_STYLE.BORDER_RADIUS,
});

export const achievedBox = style({
  background: 'rgba(26, 130, 153, 0.5)',
});

export const notAchievedBox = style({
  background: 'gray',
});

export const labelBoxStyle = style([
  flexOptions({ option: 'columnCenter' }),
  {
    boxSizing: 'border-box',
    width: constants.LABEL_BOX_STYLE.WIDTH,
    height: constants.LABEL_BOX_STYLE.HEIGHT,
    background: 'rgba(26, 130, 153, 0.5)',
    border: constants.LABEL_BOX_STYLE.BORDER,
    borderRadius: constants.LABEL_BOX_STYLE.BORDER_RADIUS,
  },
]);

export const nameSize = style([
  sprinkles({
    padding: '3x',
  }),
  {
    color: 'white',
    textAlign: 'center',
    fontSize: constants.NAME_SIZE.FONT_SIZE,
    wordSpacing: constants.NAME_SIZE.WORD_SPACING,
  },
]);

export const rewardSize = style({
  color: 'white',
  textAlign: 'center',
  fontSize: constants.REWARD_SIZE.FONT_SIZE,
  wordSpacing: constants.REWARD_SIZE.WORD_SPACING,
  lineHeight: constants.REWARD_SIZE.LINE_HEIGHT,
});

export const disabled = style({
  pointerEvents: 'none',
  filter: 'blur(8px)',
});
