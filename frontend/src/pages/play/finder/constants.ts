import { calc } from '@vanilla-extract/css-utils';

export const FINDER_WRAPPER_HEIGHT = calc.subtract(
  calc.subtract(calc.subtract('100%', '48px'), '16px'),
  '32px',
);

export const MODAL_WRAPPER_HEIGHT = '192px';
export const MODAL_WRAPPER_WIDTH = '416px';

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
    message: '컬러랜드에서는\n5인 이상 거리두기 수칙을 준수합니다',
    subMessage: '플레이 가능 인원을 초과하였습니다',
  },
} as const;
