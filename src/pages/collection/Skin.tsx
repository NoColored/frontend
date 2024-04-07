import { useEffect, useState } from 'react';

import * as styles from './index.css';

import { Skins } from '@/types/collections';

import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';

import { getCollections } from '@/services/collections';

import { useCollectionStateStore } from '@/states/collection';

const Skin = () => {
  const { skinId, setSkinId, setSkinUrl } = useCollectionStateStore();
  const [skins, setSkins] = useState<Skins[]>([]);

  useEffect(() => {
    getCollections().then((collections) => {
      if (collections && collections.skins) {
        setSkins(collections.skins);
        setSkinId(-1);
      }
    });
  }, []);

  return (
    <div>
      <div className={styles.skinWrapper}>
        {skins.map((skin) => (
          <div
            role='button'
            tabIndex={-1}
            key={skin.id}
            onClick={() => {
              if (skin.own) {
                setSkinId(skin.id);
                setSkinUrl(skin.link);
              }
            }}
          >
            <RoundCornerImageBox
              imgSrc={skin.link}
              size='full'
              borderColor={skinId === skin.id ? 'blue' : 'black'}
              borderSize={skinId === skin.id ? '5x' : '1x'}
              backgroundColor={`${skin.own ? 'white' : 'gray200'}`}
            >
              {!skin.own && (
                <div className={styles.mosaicBox}>
                  <div className={styles.mosaic} />
                </div>
              )}
            </RoundCornerImageBox>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skin;
