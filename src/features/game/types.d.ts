interface GameData {
  mapId: number;
  floorList: number[][];
  skins: string[];
}

interface characterInfo {
  x: number;
  y: number;
  velX: number;
  velY: number;
}

interface characterInfoIndex {
  index: number;
  characterInfo: characterInfo;
}
