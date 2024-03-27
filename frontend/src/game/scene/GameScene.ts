import Phaser from 'phaser';

import { characterInfo, IngameReady } from '@/types/ingame';

import { getIngameReady } from '@/services/ingame';
import {
  characterInfoList,
  currentScore,
  effectList,
  GameSocket,
  showRealSkin,
  timeLeft,
  userCharacterIndex,
} from '@/services/websocket/GameSocket';

import { useWebSocketStore } from '@/states/websocket';

import * as constants from '@/game/constants';
import { Background } from '@/game/map/Background';
import { Map } from '@/game/map/Map';
import { PhysicsMap } from '@/game/map/PhysicsMap';
import { Character } from '@/game/object/Character';
import { BgmManager } from '@/game/sound/Bgm';

export default class GameScene extends Phaser.Scene {
  private gameData: IngameReady | null;
  private characters: Character[] = [];
  private socket: GameSocket;
  private charactersPrevSkin: boolean[] = [];
  private charactersNowSkin: boolean[] = [];

  constructor() {
    super();

    this.gameData = null;
    const { webSocket } = useWebSocketStore.getState();
    this.socket = webSocket;
    this.charactersNowSkin = new Array(constants.CHARACTER_COUNT).fill(false);
  }

  private setGameReady = async () => {
    this.gameData = await getIngameReady();
    if (this.gameData === null) {
      console.error('gameData is null');
      return;
    }

    // api 값에 따른 배경 설정
    let mapName = constants.MAP_TYPE_MATCH.get(this.gameData.mapId);
    if (mapName === undefined) {
      mapName = 'basicmap';
    }

    this.load.image(
      `background`,
      `/images/map/background/${mapName}-background.png`,
    );
    this.load.image('mapType', `/images/map/background/${mapName}.png`);

    // api 값에 따른 skin 로드
    // API 값에 따른 skin(스프라이트 시트) 로드
    this.gameData.skins.forEach((skin, index) => {
      this.load.spritesheet(`player${index}`, skin, {
        frameWidth: 240,
        frameHeight: 240,
      });
    });
  };

  preload() {
    this.setGameReady();
    // Map 투명 타일
    // this.load.image('tileTransparent', '/images/map/transparent-tile.png');
    this.load.image('tileTransparent', '/images/map/transTile-Test.png');

    // music
    this.load.audio('bgm', '/music/8-bit-game.mp3');
    this.load.audio('bgm2', '/music/ready-to-play.mp3');

    // npc object
    this.load.spritesheet(
      'npc',
      '/images/character/character-default-none-clone-h240w240.png',
      {
        frameWidth: 240,
        frameHeight: 240,
      },
    );
  }

  create() {
    // bgm 삽입 -> Bgm.ts에서 구현한 SoundManager 사용
    // eslint-disable-next-line no-new
    new BgmManager(this, 'bgm', true);

    // eslint-disable-next-line no-new
    new Background(this, 'background');

    // Map 임시 - 그냥 이미지로 깔아둠
    // eslint-disable-next-line no-new
    new Map(this, 'mapType');

    // 물리 맵 구현
    const physicsMapInst = new PhysicsMap(
      this,
      this.physics.world,
      this.gameData?.floorList ?? [],
      'tileTransparent',
    );

    // object

    // 임시로
    const initialPlayerData: characterInfo = {
      x: 300,
      y: 10,
      velX: -1,
      velY: 0,
    };

    // 캐릭터 배열 생성
    for (let i = 0; i < constants.CHARACTER_COUNT; i++) {
      this.characters[i] = new Character(
        this,
        'npc',
        physicsMapInst,
        initialPlayerData,
      );
    }
  }

  // 1
  private userCharacterIndexUpdate(view: DataView) {
    const data = userCharacterIndex(view);
    this.characters[data].setSkinState(this.gameData?.skins[data] ?? 'npc');
  }

  private timeLeftUpdate(view: DataView) {
    const data = timeLeft(view);
    // 화면에 남은 시간 노출 필요
    this.gameData;
    data;
  }

  private characterInfoListUpdate(view: DataView) {
    const data = characterInfoList(view);
    this.characters.forEach((character, index) => {
      character.changePosition(
        data[index].characterInfo.x,
        data[index].characterInfo.y,
        data[index].characterInfo.velX,
        data[index].characterInfo.velY,
      );
    });
  }

  private currentScoreUpdate(view: DataView) {
    const data = currentScore(view);
    //  현재 점수 update 설정하기
    this.gameData;
    data;
  }

  // 알고리즘 생각해보기
  private showRealSkinUpdate(view: DataView) {
    const data = showRealSkin(view);
    this.charactersPrevSkin = [...this.charactersNowSkin];
    this.charactersNowSkin.fill(false);
    // 지금 받은 데이터로 업데이트
    data.forEach((index) => {
      this.characters[index[0]].setSkinState(
        this.gameData?.skins[index[1]] ?? 'npc',
      );
      this.charactersNowSkin[index[0]] = true;
    });
    // 이전에 skin but 이번엔 skin이 없는 경우
    this.charactersPrevSkin.forEach((isShow, index) => {
      if (!this.charactersNowSkin[index] && isShow) {
        this.characters[index].setSkinState('npc');
      }
    });
  }

  private effectUpdate(view: DataView) {
    const data = effectList(view);
    // 이펙트 처리
    this.gameData;
    data;
  }

  upDateFrame(messageType: number, view: DataView): void {
    switch (messageType) {
      case constants.GAMESOCKET_MESSAGE_TYPE.get('USER_CHARACTER_INDEX'):
        this.userCharacterIndexUpdate(view);
        break;
      case constants.GAMESOCKET_MESSAGE_TYPE.get('TIME_LEFT'):
        this.timeLeftUpdate(view);
        break;
      case constants.GAMESOCKET_MESSAGE_TYPE.get('CHARACTER_INFO_LIST'):
        this.characterInfoListUpdate(view);
        break;
      case constants.GAMESOCKET_MESSAGE_TYPE.get('CURRENT_SCORE'):
        this.currentScoreUpdate(view);
        break;
      case constants.GAMESOCKET_MESSAGE_TYPE.get('SHOW_REAL_SKIN'):
        this.showRealSkinUpdate(view);
        break;
      case constants.GAMESOCKET_MESSAGE_TYPE.get('EFFECT'):
        this.effectUpdate(view);
        break;

      default:
        console.log('messageError');
        break;
    }
  }

  getSocketData = () => {
    if (!this.socket) return null;

    while (!this.socket.isMessageEmpty()) {
      const message = this.socket.pollMessage();
      if (!message) {
        return null;
      }
      const view = new DataView(message);
      const messageType: number = view.getUint8(0);
      this.upDateFrame(messageType, view);
    }

    return null;
  };

  update() {
    // socket 데이터 다 처리
    this.getSocketData();
    // 처리가 다 된 상태에서 character보이는 것 변경
    this.characters.forEach((character) => {
      character.playAnims();
    });
  }
}
