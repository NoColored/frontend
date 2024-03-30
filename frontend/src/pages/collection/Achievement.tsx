import { useEffect, useState } from 'react';

import * as styles from './index.css';

import { Achievements } from '@/types/collections';

import { getCollections } from '@/services/collections';

const Achievement = () => {
  const [achievements, setAchievement] = useState<Achievements[]>([]);

  useEffect(() => {
    getCollections().then((collections) => {
      if (collections && collections.achievements) {
        setAchievement(collections.achievements);
        console.log(collections.achievements);
      }
    });
  }, []);

  return (
    <div>
      <div className={styles.achieveBoxWrapper}>
        {achievements.map((achievement) => (
          <div
            role='button'
            tabIndex={-1}
            key={achievement.id}
            className={`${styles.boxStyle} ${
              achievement.achieved ? styles.achievedBox : styles.notAchievedBox
            }`}
          >
            <div className={styles.boxStyle}>
              <div className={styles.nameSize}>{achievement.name}</div>
              <div className={styles.rewardSize}>{achievement.reward}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
