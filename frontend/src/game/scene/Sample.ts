import Phaser from 'phaser';
import { Background } from '@/game/map-class/Background';
import { Map } from '@/game/map-class/Map';
import { BgmManager } from '@/game/sound/Bgm';
import { BasicCharacter } from '@/game/character/BasicCharacter';
import players from '@/pages/play/lobby/Players';
import { TransferTiles } from '@/game/map-class/transfer/TransferTiles';

export default class Sample extends Phaser.Scene {

  private player?:Phaser.Physics.Arcade.Sprite;
  constructor() {
    super('logo');
  }

  preload() {

    // Background
    this.load.image('foodmap-background', '/images/map/background/foodmap-background.png');
    this.load.image('basicmap-background', '/images/map/background/basicmap-background.png');

    // Map
    this.load.image('foodmap', '/images/map/background/foodmap.png');
    this.load.image('basicmap', '/images/map/background/basicmap.png');

    // music
    this.load.audio('bgm', '/music/8-bit-game.mp3');
    this.load.audio('bgm2', '/music/ready-to-play.mp3');

    // character
    this.load.spritesheet('npc', '/images/character/character-default-none-clone-h240w240.png', {
      frameWidth: 240,
      frameHeight: 240
    });
  }

  create() {



    // 배경 설정
    const background = new Background(this, 'basicmap-background');
    // Map 임시 - 그냥 이미지로 깔아둠
    const map = new Map(this, 'foodmap');
// bgm 삽입 -> Bgm.ts에서 구현한 SoundManager 사용
    const bgm = new BgmManager(this);
    bgm.addBackgroundMusic('bgm2', true);


    // character
    const textCharacter = new BasicCharacter(this, 175, 175, 'npc');
    textCharacter.walk('right');
    const textCharacter2 = new BasicCharacter(this, 50, 175, 'npc');
    textCharacter2.walk('left');

    //

    const transTiles = new TransferTiles(this).createTile()



    this.player = this.physics.add.sprite(100, 100, 'npc');
    this.physics.add.collider(this.player, tile);
  }
}