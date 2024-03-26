import Phaser from 'phaser';
import { useStore } from 'zustand';

import { characterInfo, IngameReady } from '@/types/ingame';

import { getIngameReady } from '@/services/ingame';
import { GameSocket, parsingMessage } from '@/services/websocket/GameSocket';

import { useWebSocketStore } from '@/states/websocket';

import { Character } from '@/game/character/Character';
import * as constants from '@/game/constants';
import { Background } from '@/game/map/Background';
import { Map } from '@/game/map/Map';
import { PhysicsMap } from '@/game/map/PhysicsMap';

export default class GameScene extends Phaser.Scene {
  private gameData: IngameReady | null;
  private characters: Character[] = [];
  private socket: GameSocket;

  constructor() {
    super();

    this.gameData = null;
    this.socket = new GameSocket();
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

    // npc character
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
    const { webSocket } = useWebSocketStore.getState();
    // bgm 삽입 -> Bgm.ts에서 구현한 SoundManager 사용
    // const bgmInst = new BgmManager(this, 'bgm', true);
    // 배경설정
    const backgroundInst = new Background(this, 'background');
    // Map 임시 - 그냥 이미지로 깔아둠
    const mapInst = new Map(this, 'mapType');

    // 물리 맵 구현
    const physicsMapInst = new PhysicsMap(
      this,
      this.physics.world,
      this.gameData?.floorList ?? [],
      'tileTransparent',
    );

    // character

    // 임시로
    const tempPlayerData: characterInfo = {
      x: 100,
      y: 100,
      velX: 180,
      velY: 0,
    };

    // 캐릭터 배열 생성
    for (let i = 0; i < constants.CHARACTER_COUNT; i++) {
      tempPlayerData.x += i * 25;
      tempPlayerData.velX *= -1;
      this.characters[i] = new Character(
        this,
        'player1',
        physicsMapInst,
        tempPlayerData,
      );
    }
  }

  parsingMessage = () => {
    if (!this.socket) return null;

    while (!this.socket.isMessageEmpty()) {
      const message = this.socket.pollMessage();
      if (!message) {
        return null;
      }
      const view = new DataView(message);
      const messageType = view.getUint8(0);
      parsingMessage(messageType, view);
    }
    return null;
  };
}
