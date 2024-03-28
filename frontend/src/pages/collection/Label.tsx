import { useEffect, useState } from 'react';

import * as styles from './index.css';

import { Labels } from '@/types/collections';

import { getCollections } from '@/services/collections';

import { useCollectionStateStore } from '@/states/collection';

const Label = () => {
  const { labelId, setLabel } = useCollectionStateStore();
  const [labels, setLabels] = useState<Labels[]>([]);

  useEffect(() => {
    getCollections().then((collections) => {
      if (collections && collections.labels) {
        setLabels(collections.labels);
        console.log(collections.labels);
      }
    });
  }, []);

  return (
    <div>
      <div className={styles.achieveBoxWrapper}>
        {labels.map((label) => (
          <div
            role='button'
            tabIndex={-1}
            key={label.id}
            onClick={() => {
              if (label.own) {
                console.log(labelId);
                setLabel(labelId);
              }
            }}
            className={`${!label.own ? styles.disabled : ''}`}
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
