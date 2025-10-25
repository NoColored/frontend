import { calc } from '@vanilla-extract/css-utils';

import { vars } from '@/styles/vars.css';

export { PLAYER_COLORS } from '@/models/player';

export const EMPTY_PLAYER_COLOR = 'gray300' as const;

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

export * as MESSAGE from './messages';
