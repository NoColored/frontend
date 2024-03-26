import Phaser from 'phaser';

import * as constants from '../constants';

export class PhysicsMap extends Phaser.Physics.Arcade.StaticGroup {
  private tile;

  constructor(
    scene: Phaser.Scene,
    world: Phaser.Physics.Arcade.World,
    data: number[][],
    transparentTile: string,
  ) {
    super(world, scene);
    this.tile = transparentTile;
    this.createPhysicsMap(data);
    scene.physics.add.staticGroup(this);
  }

  createPhysicsMap(data: number[][]) {
    for (let i = 0; i < data.length; i++) {
      this.create(
        data[i][0] * constants.MAP_TILE_SIZE +
          (constants.MAP_TILE_SIZE / 2) * data[i][2],
        data[i][1] * constants.MAP_TILE_SIZE +
          (constants.MAP_TILE_SIZE / 2) * (data[i][3] ? data[i][3] : 1),
        this.tile,
      )
        .setScale(data[i][2], data[i][3] ? data[i][3] : 1)
        .refreshBody();
    }
  }
}
