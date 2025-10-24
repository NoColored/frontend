import Chip from '@/components/chip';
import ImageBox from '@/components/image-box';

import { MAPS } from '@/constants/map';

interface Props {
  mapId: MapId;
  size?: Parameters<typeof ImageBox>[0]['size'];
  selected?: boolean;
}

const Map = ({ size = 'full', mapId, selected }: Props) => {
  const { imgSrc, mapName } = MAPS[mapId];

  return (
    <ImageBox
      size={size}
      imgSrc={imgSrc}
      borderSize={selected ? '5x' : '1x'}
      borderColor={selected ? 'yellow' : 'black'}
    >
      <Chip color={selected ? 'yellow' : 'navy'} text={mapName} />
    </ImageBox>
  );
};

export default Map;
