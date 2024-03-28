export interface IngameReady {
  mapId: number;
  floorList: number[][];
  skins: string[];
}

export interface characterInfo {
  x: number;
  y: number;
  velX: number;
  velY: number;
}

export interface characterInfoIndex {
  index: number;
  characterInfo: characterInfo;
}
