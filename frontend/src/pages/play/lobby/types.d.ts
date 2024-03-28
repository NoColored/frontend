import * as constants from './constants';

type playerColorType =
  | (typeof constants.PLAYER_COLORS)[number]
  | typeof constants.EMPTY_PLAYER_COLOR;
