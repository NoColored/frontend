import { characterInfo, characterInfoIndex } from '@/types/ingame';

import { Socket } from '@/services/websocket/Socket';

export class GameSocket extends Socket {
  private messageQueue: ArrayBuffer[];

  constructor() {
    super();
    this.messageQueue = [];
  }

  useMessageQueue() {
    this.webSocket.onmessage = (event) => {
      this.messageQueue.push(event.data);
    };
  }

  isMessageEmpty(): boolean {
    if (this.messageQueue.length === 0) {
      return true;
    }
    return false;
  }

  pollMessage(): ArrayBuffer | undefined {
    return this.messageQueue.shift();
  }
}

const gameStartMessage = (view: DataView) => {
  return 'gameStart';
};

const characterInfoList = (view: DataView): characterInfoIndex[] => {
  let p = 1;
  const characterInfoData: characterInfoIndex[] = [];
  const length = view.getUint8(p++);

  for (let i = 0; i < length; i++) {
    // 캐릭터 정보를 담을 임시 객체를 생성합니다.
    const character: characterInfo = {
      x: view.getFloat32(p, true), // p 위치에서 x 값을 읽습니다.
      y: view.getFloat32(p + 4, true), // p+4 위치에서 y 값을 읽습니다.
      velX: view.getFloat32(p + 8, true), // p+8 위치에서 velX 값을 읽습니다.
      velY: view.getFloat32(p + 12, true), // p+12 위치에서 velY 값을 읽습니다.
    };
    p += 16;

    characterInfoData.push({ index: i, characterInfo: character });
  }
  return characterInfoData;
};
const userCharacterIndex = (view: DataView) => {
  return view.getUint8(1);
};

const timeLeft = (view: DataView) => {
  return view.getUint8(1);
};

const currentScore = (view: DataView) => {
  let p = 1;
  const scoreList: number[] = [];
  const length = view.getUint8(p++);

  for (let i = 0; i < length; i++) {
    // 캐릭터 정보를 담을 임시 객체를 생성합니다.
    scoreList[i] = view.getUint8(p++);
  }
  return scoreList;
};
export const parsingMessage = (
  messageType: number,
  view: DataView,
): number | characterInfoIndex[] | string | number[] => {
  const parsingAction: {
    [key: number]: number | characterInfoIndex[] | string | number[];
  } = {
    0: 'not yet',
    1: userCharacterIndex(view),
    2: timeLeft(view),
    10: 'gameEnd',
    100: characterInfoList(view),
    101: 'step',
    102: currentScore(view),
    200: 'test_map',
  };
  return parsingAction[messageType] ?? 'wrongType';
};
