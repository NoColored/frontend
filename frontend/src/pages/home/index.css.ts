import { style } from '@vanilla-extract/css';

import * as constants from './constants';

import { flexOptions } from '@/styles/common.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const fullWrapper = style([
  flexOptions({ option: 'column' }),
  sprinkles({
    justifyContent: 'spaceBetween',
  }),
  {
    height: '100%',
    width: '100%',
  },
]);
export const LeftButtonsWrapper = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexEnd',
  }),
  {
    gap: constants.BUTTON_GAP,
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

export const BottomContentsWrapper = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'spaceBetween',
    alignItems: 'flexEnd',
  }),
  {
    height: constants.BOTTOM_CONTENTS_WRAPPER_HEIGHT,
    maxHeight: constants.CHARACTER_SIZE_HEGITH.MAX,
  },
]);

export const TopContentsWrapper = style([
  flexOptions({ option: 'row' }),
  sprinkles({
    justifyContent: 'spaceBetween',
    paddingTop: '4x',
  }),
  {
    height: '50%',
    maxHeight: constants.TOP_CONTENTS_WRAPPER_HEIGHT_MAX,
    minHeight: constants.TOP_CONTENTS_WRAPPER_HEIGHT_MIN,
  },
]);

export const SignupBannerCharacterBox = style([
  sprinkles({
    borderRadius: 'full',
    paddingY: '2x',
    alignItems: 'center',
    marginBottom: '1x',
  }),
  {
    height: '100%',
    overflow: 'hidden',
    aspectRatio: '1 / 1',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'border-box',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
]);

export const SignupBannerBox = style([
  flexOptions({ option: 'columnCenter' }),
  {
    width: '20%',
    position: 'absolute',
    right: constants.SIGNUP_BANNER.RIGHT,
    top: constants.SIGNUP_BANNER.TOP,
    height: constants.SIGNUP_BANNER.HEIGHT,
    minHeight: constants.SIGNUP_BANNER.MIN_HEIGHT,
  },
  sprinkles({
    paddingY: '2x',
    alignItems: 'center',
  }),
]);
export const SignupBannerText = style([
  sprinkles({
    textSize: '0.75x',
  }),
  {
    textAlign: 'center',
    whiteSpace: 'pre',
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
