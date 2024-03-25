import Phaser from 'phaser';

export class TransferTiles extends Phaser.Physics.Arcade.StaticGroup {
  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
  }


  loadMap(data : number[][], tiles: any, tileWidth = 18, tileHeight = 18) {
    // Phaser의 make.tilemap을 사용하여 타일맵 생성
    const map = this.scene.make.tilemap({ data, tileWidth, tileHeight });
    // addTilesetImage을 사용하여 타일셋 이미지 추가
    let tileMap = map.addTilesetImage(tiles, tiles, tileWidth, tileHeight, 0, 0);
    // createLayer을 사용하여 맵의 레이어 생성
    if(tileMap === null){
      tileMap = map.addTilesetImage('transparentTiles');
    }
    const layer = map.createLayer(0, tileMap, 0, 0);


    return { map, tiles, layer }; // 생성된 맵, 타일셋, 레이어 반환
  }
}