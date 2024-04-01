import Phaser from 'phaser';

import { Blowup } from '@/game/object/effect/Blowup';
import { Disappear } from '@/game/object/effect/Disappear';
import { Obtain } from '@/game/object/effect/Obtain';
import { Shuffle } from '@/game/object/effect/Shuffle';
import { StopLoading } from '@/game/object/effect/StopLoading';
import ChangeDirButton from '@/game/UI/ChangeDirButton';
import JumpButton from '@/game/UI/JumpButton';

export const EffectUtils = (
  scene: Phaser.Scene,
  effectType: number,
  x: number,
  y: number,
  changeDirbuttonsInst?: ChangeDirButton | null,
  changeJumpbuttonsInst?: JumpButton | null,
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
      // 키보드 변경
      scene.input.keyboard?.removeAllListeners();
      changeDirbuttonsInst?.changeButtonItem();
      changeJumpbuttonsInst?.changeButtonItem();
      scene.time.delayedCall(5000, () => {
        changeDirbuttonsInst?.resetButtonItem();
        changeJumpbuttonsInst?.resetButtonItem();
      });
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
