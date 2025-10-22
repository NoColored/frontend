import { memo, useState } from 'react';

import { useCollectionActions } from './hooks';
import * as styles from './index.css';

import RoundCornerImageBox from '@/components/image-box';

const getBorderColor = (equipped: boolean, selected: boolean) => {
  if (equipped) {
    return 'blue';
  }
  if (selected) {
    return 'yellow';
  }
  return 'black';
};

const SkinItem = memo(
  ({
    skin,
    onClick,
    selected,
  }: {
    skin: Skins;
    onClick: () => void;
    selected: boolean;
  }) => {
    return (
      <button
        type='button'
        className={styles.skinItem({ owned: skin.own })}
        onClick={onClick}
      >
        <RoundCornerImageBox
          imgSrc={skin.link}
          size='full'
          borderColor={getBorderColor(skin.equipped, selected)}
          borderSize={skin.equipped || selected ? '5x' : '1x'}
          backgroundColor={skin.own ? 'white' : 'gray200'}
        >
          {!skin.own && (
            <div className={styles.mosaicBox}>
              <div className={styles.mosaic} />
            </div>
          )}
        </RoundCornerImageBox>
      </button>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.skin.equipped === nextProps.skin.equipped &&
      prevProps.selected === nextProps.selected
    );
  },
);

const Skin = ({ skins }: { skins: Skins[] }) => {
  const [selectedId, setSelectedId] = useState<Skins['id'] | null>(null);
  const { setSelectedSkin } = useCollectionActions();

  return (
    <div className={styles.skinWrapper}>
      {skins.map((skin) => (
        <SkinItem
          key={skin.id}
          skin={skin}
          onClick={() => {
            if (skin.own) {
              setSelectedId(skin.id);
              setSelectedSkin(skin);
            }
          }}
          selected={skin.id === selectedId}
        />
      ))}
    </div>
  );
};

export default Skin;
