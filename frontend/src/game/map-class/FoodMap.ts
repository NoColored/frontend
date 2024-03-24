
export class FoodMap extends Phaser.Tilemaps.Tilemap {
  constructor(scene: Phaser.Scene, mapData: any) {
    super(scene, mapData);
    this.addTilesetImage('foodmap', '/images/map/foodmap-tileset-h18w972.png');
  }
}