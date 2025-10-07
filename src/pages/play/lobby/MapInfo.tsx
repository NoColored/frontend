import * as styles from './index.css';

import RoundCornerImageBox from '@/components/image-box';
import ColoredTextBox from '@/components/textbox/ColoredTextBox';

import type { GameMap } from '@/pages/play/finder/types';

interface Props {
  map: GameMap;
}

const MapInfo = ({ map }: Props) => {
  return (
    <div className={styles.mapInfo}>
      <RoundCornerImageBox size='full' imgSrc={map.imgSrc} borderSize='1x'>
        <ColoredTextBox size='small' color='navy' text={map.mapName} />
      </RoundCornerImageBox>
    </div>
  );
};

export default MapInfo;
