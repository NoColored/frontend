import { calc } from '@vanilla-extract/css-utils';

import { vars } from '@/styles/vars.css';

export { PLAYER_COLORS } from '@/constants/player';

export const EMPTY_PLAYER_COLOR = 'gray300' as const;

export const PLAYER_ICON = {
  pink: '/images/ui/icon/shape/icon-shape-white-small-player0-h16w16.png',
  green: '/images/ui/icon/shape/icon-shape-white-small-player1-h16w16.png',
  yellow: '/images/ui/icon/shape/icon-shape-white-small-player2-h16w16.png',
  blue: '/images/ui/icon/shape/icon-shape-white-small-player3-h16w16.png',
};

export const PLAYER_ICON_LARGE = {
  pink: '/images/ui/icon/shape/icon-shape-white-big-player0-h48w48.png',
  green: '/images/ui/icon/shape/icon-shape-white-big-player1-h48w48.png',
  yellow: '/images/ui/icon/shape/icon-shape-white-big-player2-h48w48.png',
  blue: '/images/ui/icon/shape/icon-shape-white-big-player3-h48w48.png',
  gray300: '',
};

export const TITLE_MARGIN_BOTTOM = '1x';

export const TITLE_SIZE = '1.5x';

export const PLAYER_WRAPPER_HEIGHT = calc('100%')
  .subtract(vars.fontSize[TITLE_SIZE])
  .subtract(vars.space[TITLE_MARGIN_BOTTOM])
  .toString();

export const PLAYER_INFO = {
  default: {
    titleSize: vars.fontSize['0.75x'],
    nameSize: vars.fontSize['1x'],
    padding: vars.space['2x'],
    questionMarkSize: vars.fontSize['1.5x'],
  },
  small: {
    titleSize: vars.fontSize['0.5x'],
    nameSize: vars.fontSize['0.75x'],
    padding: vars.space['1.5x'],
    questionMarkSize: vars.fontSize['1.25x'],
  },
};

export const PLAYER_INFO_HEIGHT = (size: keyof typeof PLAYER_INFO) =>
  calc(PLAYER_INFO[size].titleSize)
    .add(PLAYER_INFO[size].nameSize)
    .add(PLAYER_INFO[size].padding)
    .add(PLAYER_INFO[size].padding)
    .toString();

export const LONELY_MASTER_MESSAGE: string =
  '혼자서 싸울 수는 없습니다. \n 혹시 친구가 없나요?';

export const SOMEBODY_NOT_READY_MESSAGE: string =
  '싸움을 두려워하는 겁쟁이가 있나본데요?';
