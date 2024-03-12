import * as styles from './index.css.ts';

import { tempButton } from '@/components/button/colored-icon-button/index.css.ts';
import ColoredIconButton from '@/components/button/colored-icon-button/index.tsx';
import Game from '@/components/Game.tsx';

import testIcon from '@/assets/ui/icon/shape/icon-shape-white-big-player0-h48w48.png';

const Example = () => {
  return (
    <div>
      <div className={`${styles.testForRecipe} ${tempButton}`}>
        howToUseRecipe
      </div>
      <ColoredIconButton icon={testIcon} text='테스트' />
      <Game />
    </div>
  );
};

export default Example;
