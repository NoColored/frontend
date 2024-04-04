import { calc } from '@vanilla-extract/css-utils';

import type { GameMap } from './types';

export const FINDER_WRAPPER_HEIGHT = calc.subtract(
  calc.subtract(calc.subtract('100%', '48px'), '16px'),
  '32px',
);

export const MODAL_WRAPPER_HEIGHT = '192px';
export const MODAL_WRAPPER_WIDTH = '416px';
export const CREATE_MODAL_FONT_SIZE = '1x';

export const FAIL_MESSAGE_MODAL = {
  SEARCH: {
    message: '진짜로 방장이\n허락했나요?',
    subMessage: '방 코드나 비밀번호를 한 번 더 확인해주세요',
  },
  PASSWORD: {
    message: '9998번만\n더 시도해보시는건 어때요?',
    subMessage: '비밀번호를 한 번 더 확인해주세요',
  },
  ENTER: {
    message: '노컬러랜드는 5인 이상\n거리두기 수칙을 준수합니다',
    subMessage: '플레이 가능 인원을 초과하였습니다',
  },
} as const;

export const MAPS: GameMap[] = [
  {
    mapId: 0,
    imgSrc: '/images/map/background/random-map-rainbow-h450w450.png',
    mapName: '랜덤',
  },
  {
    mapId: 1,
    imgSrc: '/images/map/background/basicmap.png',
    mapName: '베이직',
  },
  {
    mapId: 2,
    imgSrc: '/images/map/background/foodmap.png',
    mapName: '푸디',
  },
  {
    mapId: 3,
    imgSrc: '/images/map/background/foodmap2.png',
    mapName: '푸디2',
  },
  {
    mapId: 4,
    imgSrc: '/images/map/background/factorymap.png',
    mapName: '팩토리',
  },
] as const;

export const MAP_ITEM_HEIGHT = '100px';

export const ALERT_MESSAGE = ' 정보를 모두 입력해주세요.';
