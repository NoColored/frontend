import Phaser from 'phaser';

import { Blowup } from '@/features/game/object/effect/Blowup';
import { Disappear } from '@/features/game/object/effect/Disappear';
import { Obtain } from '@/features/game/object/effect/Obtain';
import { Shuffle } from '@/features/game/object/effect/Shuffle';
import { StopLoading } from '@/features/game/object/effect/StopLoading';

export const EffectUtils = (
  scene: Phaser.Scene,
  effectType: number,
  x: number,
  y: number,
): void => {
  // eslint-disable-next-line default-case
  switch (effectType) {
    case 0:
      // eslint-disable-next-line no-new
      new Blowup(scene, x, y);
      return;
    case 1:
      // eslint-disable-next-line no-new
      new StopLoading(scene, x, y);
      return;
    case 2:
      // eslint-disable-next-line no-new
      new Shuffle(scene);
      return;
    case 3:
      // eslint-disable-next-line no-new
      new Disappear(scene, x, y);
      return;
    case 4:
      // eslint-disable-next-line no-new
      new Obtain(scene);
  }
};
