import { useState } from 'react';
import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';
import * as styles from './index.css';
import { getCollections } from '@/services/collections';
import { Skins } from '@/types/collections';

const Skin = () => {
  const [skins, setSkins] = useState<Skins[]>([]);

  getCollections().then((collections) => {
    if (collections && collections.skins) {
      setSkins(collections.skins); // 상태 업데이트
    }
  });

  return (
    <div className={styles.imageBoxWrapper}>
      {skins.map((skin) => (
        <RoundCornerImageBox
          key={skin.id}
          imgSrc={skin.link}
          size='medium'
          borderColor='black'
          borderSize='1x'
        />
      ))}
    </div>
  );
};

export default Skin;
