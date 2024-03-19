import { calc } from '@vanilla-extract/css-utils';

import { vars } from '@/styles/vars.css';

export const PLAYER_COLORS = ['pink', 'green', 'yellow', 'blue'] as const;

export const PLAYER_ICON = {
  pink: '@/assets/ui/icon/shape/icon-shape-white-small-player0-h16w16.png',
  green: '@/assets/ui/icon/shape/icon-shape-white-small-player1-h16w16.png',
  yellow: '@/assets/ui/icon/shape/icon-shape-white-small-player2-h16w16.png',
  blue: '@/assets/ui/icon/shape/icon-shape-white-small-player3-h16w16.png',
};

export const PLAYER_ICON_LARGE = {
  pink: '@/assets/ui/icon/shape/icon-shape-white-big-player0-h48w48.png',
  green: '@/assets/ui/icon/shape/icon-shape-white-big-player1-h48w48.png',
  yellow: '@/assets/ui/icon/shape/icon-shape-white-big-player2-h48w48.png',
  blue: '@/assets/ui/icon/shape/icon-shape-white-big-player3-h48w48.png',
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
