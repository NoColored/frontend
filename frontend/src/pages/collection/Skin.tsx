import {useEffect, useState} from 'react';

import * as styles from './index.css';

import { Skins } from '@/types/collections';

import SettingTextButton from "@/components/button/SettingTextButton";
import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';

import { getCollections } from '@/services/collections';

const Skin = () => {
  const [skins, setSkins] = useState<Skins[]>([]);

  useEffect(() => {
    getCollections().then((collections) => {
      if (collections && collections.skins) {
        setSkins(collections.skins);
      }
    });
  }, []);

  return (
      <div>
        <div className={styles.imageBoxWrapper}>
          {skins.map((skin) => (
              <div
                  key={skin.id}
                  onClick={() => {
                    if (!skin.own) {
                      console.log("이 스킨은 소유하지 않았습니다.");
                    }
                  }}
                  className={`${!skin.own ? styles.disabled : ''}`}
              >
                <RoundCornerImageBox
                    imgSrc={skin.link}
                    size="medium"
                    borderColor="black"
                    borderSize="1x"
                    backgroundColor='white'
                  />
              </div>
          ))}
        </div>
        <SettingTextButton onClick={() => {}} size="small" colorStyle="black">
          저장
        </SettingTextButton>
      </div>
  );
};

export default Skin;

