import { characterInfo, characterInfoIndex } from '@/types/ingame';

import { Socket } from '@/services/websocket/Socket';

export class GameSocket extends Socket {
  private messageQueue: ArrayBuffer[];

  constructor() {
    super();
    this.messageQueue = [];
  }

  useMessageQueue() {
    this.webSocket.onmessage = async (event) => {
      const data = await event.data.arrayBuffer();
      this.messageQueue.push(data);
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

export const characterInfoList = (
  view: DataView,
  point: number,
): [characterInfoIndex[], number] => {
  let p = point;
  const characterInfoData: characterInfoIndex[] = [];
  const length = view.getUint8(p++);

  for (let i = 0; i < length; i++) {
    // 캐릭터 정보를 담을 임시 객체를 생성합니다.
    const character: characterInfo = {
      x: view.getFloat32(p, false), // p 위치에서 x 값을 읽습니다.
      y: view.getFloat32(p + 4, false), // p+4 위치에서 y 값을 읽습니다.
      velX: view.getFloat32(p + 8, false), // p+8 위치에서 velX 값을 읽습니다.
      velY: view.getFloat32(p + 12, false), // p+12 위치에서 velY 값을 읽습니다.
    };
    p += 16;

    characterInfoData.push({ index: i, characterInfo: character });
  }
  return [characterInfoData, 2 + 16 * length];
};
export const userCharacterIndex = (view: DataView, point: number) => {
  return view.getUint8(point);
};

export const timeLeft = (view: DataView, point: number) => {
  return view.getUint8(point);
};

export const currentScore = (
  view: DataView,
  point: number,
): [number[], number] => {
  let p = point;
  const scoreList: number[] = [];
  const length = view.getUint8(p++);

  for (let i = 0; i < length; i++) {
    // 캐릭터 정보를 담을 임시 객체를 생성합니다.
    scoreList[i] = view.getUint8(p++);
  }
  return [scoreList, 2 + length];
};

export const showRealSkin = (
  view: DataView,
  point: number,
): [number[][], number] => {
  const showSkinList: number[][] = [];
  let p = point;
  const length = view.getUint8(p++);
  for (let i = 0; i < length; i++) {
    showSkinList.push([view.getUint8(p++), view.getUint8(p++)]);
  }
  return [showSkinList, 2 + 2 * length];
};

export const effectList = (
  view: DataView,
  point: number,
): [number[][], number] => {
  const showEffectList: number[][] = [];
  let p = point;
  const length = view.getUint8(p++);
  for (let i = 0; i < length; i++) {
    showEffectList.push([
      view.getUint8(p + 1),
      view.getUint8(p + 4),
      view.getUint8(p + 4),
    ]);
    p += 9;
  }
  return [showEffectList, 2 + 9 * length];
};
