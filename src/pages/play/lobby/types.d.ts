type playerColorType =
  | (typeof import('./constants').PLAYER_COLORS)[number]
  | typeof import('./constants').EMPTY_PLAYER_COLOR;
