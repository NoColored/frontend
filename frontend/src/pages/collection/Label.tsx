import { useEffect, useState } from 'react';

import * as styles from './index.css';

import { Labels } from '@/types/collections';

import { getCollections } from '@/services/collections';

import { useCollectionStateStore } from '@/states/collection';

const Label = () => {
  const { setLabel, setLabelName } = useCollectionStateStore();
  const [labels, setLabels] = useState<Labels[]>([]);

  useEffect(() => {
    getCollections().then((collections) => {
      if (collections && collections.labels) {
        setLabels(collections.labels);
        // console.log(collections.labels);
      }
    });
  }, []);

  const labelClick = (label: Labels) => {
    if (label.own) {
      setLabel(label.id);
      setLabelName(label.name);
    }
  };

  return (
    <div>
      <div className={styles.achieveBoxWrapper}>
        {labels.map((label) => (
          <div
            role='button'
            tabIndex={-1}
            key={label.id}
            onClick={() => labelClick(label)}
            className={label.own ? styles.achievedBox : styles.notAchievedBox}
          >
            <div className={styles.labelBoxStyle}>
              <div className={styles.nameSize}>{label.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Label;
