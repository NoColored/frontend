import {useEffect, useState} from 'react';

import * as styles from './index.css';

import { Achievements } from '@/types/collections';

import SettingTextButton from "@/components/button/SettingTextButton";
import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';

import { getCollections } from '@/services/collections';

const Achievement = () => {
  const [achievements, setAchievement] = useState<Achievements[]>([]);

  useEffect(() => {
    getCollections().then((collections) => {
      if (collections && collections.achievements) {
        setAchievement(collections.achievements);
      }
    });
  }, []);

  return (
      <div>
        <div className={styles.imageBoxWrapper}>
          {achievements.map((achievement) => (
              <div
                  key={achievement.id}
                  onClick={() => {
                    if (!achievement.achieved) {
                      console.log("이 스킨은 소유하지 않았습니다.");
                    }
                  }}
                  className={`${!achievement.achieved ? styles.disabled : ''}`}
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

export default Achievement;

