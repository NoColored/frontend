import Phaser from 'phaser';

import { characterInfo, IngameReady } from '@/types/ingame';

import { getIngameReady } from '@/services/ingame';
import {
  characterInfoList,
  currentScore,
  effectList,
  GameSocket,
  showItem,
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
import { CharacterAnimation } from '@/game/object/CharacterAnimation';
import { CharacterParticle } from '@/game/object/CharacterParticle';
import { CharacterTopIcon } from '@/game/object/CharacterTopIcon';
import { EffectAnimations } from '@/game/object/effect/EffectAnimations';
import { Item } from '@/game/object/Item';
import CountDown from '@/game/scene/CountDown';
import { EffectUtils } from '@/game/scene/EffectUtils';
import GameOver from '@/game/scene/GameOver';
import LoadingUtils from '@/game/scene/LoadingUtils';
import { BgmManager } from '@/game/sound/Bgm';
import ChangeDirButton from '@/game/UI/ChangeDirButton';
import JumpButton from '@/game/UI/JumpButton';
import { TopUi } from '@/game/UI/TopUi';

export default class GameScene extends Phaser.Scene {
  private socket: GameSocket;

  private gameData: IngameReady | null;
  private gameState: 'loading' | 'ready' | 'countDown' | 'playing' | 'end' =
    'loading';

  private loadingManager;
  private countDownManager: CountDown;

  // GameObject들
  private characters: Character[] = [];
  private characterIcons: CharacterTopIcon[];
  private characterParticle: CharacterParticle;
  private characterIconKeys: string[];

  private charactersPrevSkin: number[] = [];
  private charactersNowSkin: number[] = [];

  private icons: string[] = [];
  private item: Item | null = null;

  private topUi: TopUi | null = null;
  private changeDirButton: ChangeDirButton | null = null;
  private jumpButton: JumpButton | null = null;

  private backgroundMusic: BgmManager | null = null;

  // nowUSerIndex
  private nowUserIndex: number = -1;

  private setIsActive: (isActive: boolean) => void;

  constructor(
    setIsActive: (isActive: boolean) => void,
    onDisconnect: () => void,
  ) {
    super({ key: 'GameScene' });
    this.setIsActive = setIsActive;
    // WebSocket
    const { webSocket } = useWebSocketStore.getState();
    this.socket = webSocket;
    this.socket.useMessageQueue();
    this.socket.inGameUnconnected(onDisconnect);

    // api 데이터 초기화
    this.gameData = null;

    // GameObject 초기화
    this.topUi = null;
    this.jumpButton = null;
    this.changeDirButton = null;

    this.characterIcons = [];
    this.characterIconKeys = [];
    this.characterParticle = {} as CharacterParticle;

    this.item = null;

    // NowSkin만 먼저 초기화 / prev는 작동 중 자동 세팅
    this.charactersNowSkin = new Array(constants.CHARACTER_COUNT).fill(-1);

    // 로딩 화면 인스턴스 생성
    this.loadingManager = new LoadingUtils(this);
    this.countDownManager = new CountDown(this);
  }

  // 게임 초기 데이터 콜 로직
  private setGameReady = async () => {
    this.gameData = await getIngameReady();

    // 게임 데이터 없을 시 오류
    if (this.gameData === null) {
      console.error('gameData is null');
      return;
    }

    // api 값에 따른 배경 설정
    // api 값에 따른 asset 로드
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
    this.loadingManager.createLoadingScreen();
    this.setGameReady();
    // Map 투명 타일
    this.load.image('tileTransparent', '/images/map/transparent-tile.png');
    // this.load.image('tileTransparent', '/images/map/transTile-Test.png');
    this.load.image('gradient', '/images/map/gradient-h450-w450.png');

    // music
    this.load.audio('bgm', '/music/8-bit-game.mp3');
    this.load.audio('bgm2', '/music/ready-to-play.mp3');
    this.load.audio('blowupSound', '/music/blowupSound.mp3');
    this.load.audio('obtainSound', '/music/obtainSound.mp3');
    this.load.audio('countdownSound', '/music/countdownSound.mp3');

    // npc object
    this.load.spritesheet(
      'npc',
      '/images/character/character-default-none-clone-h240w240.png',
      {
        frameWidth: 240,
        frameHeight: 240,
      },
    );
    for (let i = 0; i < 4; i++) {
      this.load.image(
        `player${i}Icon`,
        `/images/ui/icon/shape/icon-shape-big-player${i}-h32w32.png`,
      );
      this.icons.push(`player${i}Icon`);

      const characterIconKey = `player${i}SmallIcon`;
      this.load.image(
        characterIconKey,
        `/images/ui/icon/shape/icon-shape-small-player${i}-h16w16.png`,
      );
      this.characterIconKeys.push(characterIconKey);
    }

    // 버튼 asset
    this.load.image(
      'clickedDirButton',
      '/images/ui/controller/icon-controller-click-change.svg',
    );
    this.load.image(
      'dirButton',
      '/images/ui/controller/icon-controller-change.svg',
    );
    this.load.image(
      'clickedJumpButton',
      '/images/ui/controller/icon-controller-click-jump.svg',
    );
    this.load.image(
      'jumpButton',
      '/images/ui/controller/icon-controller-jump.svg',
    );

    // 아이템 asset
    Object.values(constants.ITEM_TYPE).forEach((itemType) => {
      this.load.image(itemType, `/images/items/item-${itemType}-h32w32.png`);
    });

    // 이펙트 asset
    this.load.spritesheet(
      'blowup',
      '/images/effect/effect-play-blowup-h16w128.png',
      {
        frameWidth: 16,
        frameHeight: 16,
      },
    );
    this.load.spritesheet(
      'stopLoading',
      '/images/effect/effect-item-stop-h50w600.png',
      {
        frameWidth: 50,
        frameHeight: 50,
      },
    );
    this.load.spritesheet(
      'shuffle',
      '/images/effect/effect-item-arrowrotate-h128w768.png',
      {
        frameWidth: 128,
        frameHeight: 128,
      },
    );

    this.load.spritesheet(
      'disappear',
      '/images/effect/effect-item-firework-h47w47.png',
      {
        frameWidth: 47,
        frameHeight: 47,
      },
    );
  }

  create() {
    this.physics.world.gravity.y = 0;
    // bgm 삽입 -> Bgm.ts에서 구현한 SoundManager 사용
    // eslint-disable-next-line no-new
    // this.backgroundMusic = new BgmManager(this, 'bgm', true);

    // eslint-disable-next-line no-new
    new Background(this, 'background');

    // Map 임시 - 그냥 이미지로 깔아둠
    // eslint-disable-next-line no-new
    new Map(this, 'mapType');

    // Effect 생성
    // eslint-disable-next-line no-new
    new EffectAnimations(this.game);

    this.gameData?.floorList.push(constants.WALL_MAP[0]);
    this.gameData?.floorList.push(constants.WALL_MAP[1]);
    // 물리 맵 구현
    const physicsMapInst = new PhysicsMap(
      this,
      this.physics.world,
      this.gameData?.floorList ?? [],
      'tileTransparent',
    );

    // 버튼 증록 - 비활성화 상태
    this.changeDirButton = new ChangeDirButton(this, this.socket);
    this.jumpButton = new JumpButton(this, this.socket);

    // character
    const initialPlayerData: characterInfo = {
      x: 1000,
      y: 1000,
      velX: 0,
      velY: 0,
    };

    // eslint-disable-next-line no-new
    new CharacterAnimation(this.game, this.gameData?.skins.length ?? 0);
    // 캐릭터 배열 생성
    for (let i = 0; i < constants.CHARACTER_COUNT; i++) {
      this.characters[i] = new Character(
        this,
        'npc',
        physicsMapInst,
        initialPlayerData,
      );
    }

    for (let i = 0; i < 4; i++) {
      this.characterIcons.push(
        new CharacterTopIcon(this, this.characterIconKeys[i], this.characters),
      );
    }
    this.characterParticle = new CharacterParticle(
      this,
      this.characterIconKeys,
    );

    this.item = new Item(this);

    this.countDownManager.createCountDown();

    this.topUi = new TopUi(this, this.gameData?.skins.length ?? 0, this.icons);
    this.topUi.hideUi();

    // 이벤트 핸들러 등록
    this.events.on('gameStateChange', this.handleGameStateChange, this);

    // 각종 세팅 완료
    this.changeGameState('ready');
    this.socket.sendInputMesssage(
      constants.SEND_WOBSOCKT_MESSAGE_TYPE.LOAD_COMPLETE,
    );
  }

  private gameStartUpdate() {
    this.changeGameState('playing');
    if (this.changeDirButton === null || this.jumpButton === null) {
      console.log('button is null');
      return 1;
    }

    return 1;
  }

  // 1
  private userCharacterIndexUpdate(view: DataView) {
    const data = userCharacterIndex(view, this.p + 1);
    const [colorIdx, characterIdx] = data;
    if (this.nowUserIndex === characterIdx) return 3;
    if (this.nowUserIndex !== -1) {
      this.characters[this.nowUserIndex].setSkinState('npc');
      this.characters[this.nowUserIndex].setAsNoUser();
    }

    this.nowUserIndex = characterIdx;
    this.characters[characterIdx].setSkinState(`player${colorIdx}` ?? 'npc');
    this.characters[characterIdx].setAsUser();
    this.characterIcons[colorIdx].followCharacter(characterIdx);

    this.characterParticle.setColor(colorIdx);
    this.characterParticle.followCharacter(this.characters[characterIdx]);
    return 3;
  }

  private timeLeftUpdate(view: DataView) {
    const data = timeLeft(view, this.p + 1);
    if (this.topUi === null) return 2;
    this.topUi.updateTimer(data);
    return 2;
  }

  private countDownUpdate(view: DataView) {
    const data = timeLeft(view, this.p + 1);
    if (this.gameState === 'ready') {
      this.changeGameState('countDown');
    }
    if (this.gameState === 'playing') return 2;
    this.countDownManager.changeCountDownText(data);
    return 2;
  }

  private itemUpdate(view: DataView) {
    const [data, length] = showItem(view, this.p + 1);
    const [itemNum, x, y] = data;
    if (itemNum === 0) {
      this.item?.itemShift();
    } else {
      this.item?.itemPop(itemNum, x, y);
    }

    return length;
  }

  private gameOverUpdate() {
    this.changeGameState('end');
    return 1;
  }

  private characterInfoListUpdate(view: DataView) {
    const [data, length] = characterInfoList(view, this.p + 1);
    this.characters.forEach((character, index) => {
      character.changePosition(data[index].characterInfo);
    });
    return length;
  }

  private currentScoreUpdate(view: DataView) {
    const [data, length] = currentScore(view, this.p + 1);
    //  현재 점수 update 설정하기
    for (let i = 0; i < data.length; i++) {
      this.topUi?.updateScore(data);
    }

    return length;
  }

  // 알고리즘 생각해보기
  private showRealSkinUpdate(view: DataView) {
    const [data, length] = showRealSkin(view, this.p + 1);
    this.charactersPrevSkin = [...this.charactersNowSkin];
    this.charactersNowSkin.fill(-1);

    // 지금 받은 데이터로 업데이트
    data.forEach((index) => {
      const [colorIdx, characterIdx] = index;
      this.characters[characterIdx].setSkinState(`player${colorIdx}` ?? 'npc');
      this.charactersNowSkin[characterIdx] = colorIdx;
      this.characterIcons[colorIdx].followCharacter(characterIdx);
    });
    // 이전에 skin but 이번엔 skin이 없는 경우
    this.charactersPrevSkin.forEach((colorIdx, characterIdx) => {
      if (
        !this.characters[characterIdx].isUser &&
        this.charactersNowSkin[characterIdx] === -1 &&
        colorIdx !== -1
      ) {
        this.characters[characterIdx].setSkinState('npc');
        this.characterIcons[colorIdx].stopFollowing(characterIdx);
      }
    });
    return length;
  }

  private effectUpdate(view: DataView) {
    const [data, length] = effectList(view, this.p + 1);

    data.forEach((effect) => {
      EffectUtils(this, effect[0], effect[1], effect[2]);
    });
    return length;
  }

  upDateFrame(messageType: number, view: DataView): number {
    switch (messageType) {
      case constants.GAMESOCKET_MESSAGE_TYPE.get('GAME_START'):
        return this.gameStartUpdate();
      case constants.GAMESOCKET_MESSAGE_TYPE.get('USER_CHARACTER_INDEX'):
        return this.userCharacterIndexUpdate(view);
      case constants.GAMESOCKET_MESSAGE_TYPE.get('TIME_LEFT'):
        return this.timeLeftUpdate(view);
      case constants.GAMESOCKET_MESSAGE_TYPE.get('COUNTDOWN'):
        return this.countDownUpdate(view);
      case constants.GAMESOCKET_MESSAGE_TYPE.get('ITEM_TYPE'):
        return this.itemUpdate(view);
      case constants.GAMESOCKET_MESSAGE_TYPE.get('GAME_OVER'):
        return this.gameOverUpdate();
      case constants.GAMESOCKET_MESSAGE_TYPE.get('CHARACTER_INFO_LIST'):
        return this.characterInfoListUpdate(view);
      case constants.GAMESOCKET_MESSAGE_TYPE.get('CURRENT_SCORE'):
        return this.currentScoreUpdate(view);
      case constants.GAMESOCKET_MESSAGE_TYPE.get('SHOW_REAL_SKIN'):
        return this.showRealSkinUpdate(view);
      case constants.GAMESOCKET_MESSAGE_TYPE.get('EFFECT'):
        return this.effectUpdate(view);

      default:
        console.log('messageError', messageType);
        console.log(this.p);
        console.log(view);
        return 2;
    }
  }

  private p: number = 0;

  getSocketData = () => {
    if (!this.socket) return null;

    while (!this.socket.isMessageEmpty()) {
      const message = this.socket.pollMessage();
      if (!message) {
        return null;
      }
      const view = new DataView(message);
      this.p = 0;
      while (this.p < view.byteLength) {
        const messageType = view.getUint8(this.p);

        const length = this.upDateFrame(messageType, view);
        this.p += length;
      }
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

  // GameStateController

  changeGameState(
    newState: 'loading' | 'ready' | 'countDown' | 'playing' | 'end',
  ) {
    this.gameState = newState;
    // 게임 상태 변경 이벤트 발생
    this.events.emit('gameStateChange', newState);
  }

  handleGameStateChange(
    newState: 'loading' | 'ready' | 'countDown' | 'playing' | 'end',
  ) {
    switch (newState) {
      case 'ready':
        this.getSocketData();
        this.countDownManager.showCountDown();
        break;
      case 'countDown':
        this.loadingManager.destroyLoadingScreen();
        this.topUi?.showUi();

        break;
      case 'playing':
        this.jumpButton?.setButtonAndKeyInputEnabled(true);
        this.changeDirButton?.setButtonAndKeyInputEnabled(true);
        this.countDownManager.destroyCountDown();
        this.backgroundMusic?.playBackgroundMusic();
        this.physics.world.gravity.y = constants.GRAVITY;

        break;
      case 'end':
        // eslint-disable-next-line no-new
        new GameOver(this);
        this.socket.inGameUnconnected(() => {});
        this.jumpButton?.setButtonAndKeyInputEnabled(false);
        this.changeDirButton?.setButtonAndKeyInputEnabled(false);
        this.jumpButton?.destroy();
        this.changeDirButton?.destroy();

        this.time.delayedCall(
          3000,
          () => {
            this.setIsActive(false);
          },
          [],
          this,
        );

        break;
      default:
        break;
    }
  }
}
