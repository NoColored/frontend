export const MAPS = {
  0: {
    imgSrc: '/images/map/background/random-map-rainbow-h450w450.png',
    mapName: '랜덤',
  },
  4: {
    imgSrc: '/images/map/background/factorymap.png',
    mapName: '팩토리',
  },
  3: {
    imgSrc: '/images/map/background/foodmap2.png',
    mapName: '푸디2',
  },
  1: {
    imgSrc: '/images/map/background/basicmap.png',
    mapName: '베이직',
  },
  2: {
    imgSrc: '/images/map/background/foodmap.png',
    mapName: '푸디',
  },
} as const satisfies Record<number, { imgSrc: string; mapName: string }>;

export const MAP_ID_LIST = Object.keys(MAPS).map(
  (key) => Number(key) as keyof typeof MAPS,
);
