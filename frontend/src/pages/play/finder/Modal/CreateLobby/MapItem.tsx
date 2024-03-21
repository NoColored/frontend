import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';
import ColoredTextBox from '@/components/textbox/ColoredTextBox';

import * as styles from '@/pages/play/finder/Modal/index.css';

interface Props {
  mapName: string;
  imgSrc: string;
  isSelected?: boolean;
  onClick: () => void;
}

const MapItem = ({ mapName, imgSrc, isSelected, onClick }: Props) => {
  return (
    <div className={styles.mapItemWrapper} onClick={onClick}>
      <RoundCornerImageBox
        size='full'
        imgSrc={imgSrc}
        borderSize={isSelected ? '5x' : '1x'}
        borderColor={isSelected ? 'yellow' : 'black'}
      >
        <ColoredTextBox
          size='small'
          color={isSelected ? 'yellow' : 'black'}
          text={mapName}
        />
      </RoundCornerImageBox>
    </div>
  );
};
export default MapItem;
