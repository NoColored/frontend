import * as styles from './index.css';

import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';
import ColoredTextBox from '@/components/textbox/ColoredTextBox';

import { MAPS } from '@/pages/play/finder/constants';

interface Props {
  mapId: number;
}

const MapInfo = ({ mapId }: Props) => {
  const map = MAPS.find((map) => map.mapId === mapId);

  if (!map) {
    return <></>;
  }

  return (
    <div className={styles.mapInfo}>
      <RoundCornerImageBox size='full' imgSrc={map.imgSrc} borderSize='1x'>
        <ColoredTextBox size='small' color='navy' text={map.mapName} />
      </RoundCornerImageBox>
    </div>
  );
};

export default MapInfo;
