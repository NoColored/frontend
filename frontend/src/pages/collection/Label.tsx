import {useEffect, useState} from 'react';

import * as styles from './index.css';

import { Labels } from '@/types/collections';

import SettingTextButton from "@/components/button/SettingTextButton";
import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';

import { getCollections } from '@/services/collections';

const Label = () => {
  const [labels, setLabels] = useState<Labels[]>([]);

  useEffect(() => {
    getCollections().then((collections) => {
      if (collections && collections.labels) {
        setLabels(collections.labels);
      }
    });
  }, []);

  return (
      <div>
        <div className={styles.imageBoxWrapper}>
          {labels.map((label) => (
              <div
                  key={label.id}
                  onClick={() => {
                    if (!label.own) {
                      console.log("이 스킨은 소유하지 않았습니다.");
                    }
                  }}
                  className={`${!label.own ? styles.disabled : ''}`}
              >
                <RoundCornerImageBox
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

export default Label;

