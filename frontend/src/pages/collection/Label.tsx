import { useEffect, useState } from 'react';
import {useLoaderData} from "react-router-dom";

import * as styles from './index.css';

import {User} from "@/types/auth";
import { Labels } from '@/types/collections';

import { getCollections } from '@/services/collections';

import { useCollectionStateStore } from '@/states/collection';

const Label = () => {
  const user = useLoaderData() as User;
  const { setLabel, setLabelName } = useCollectionStateStore();
  const [labels, setLabels] = useState<Labels[]>([]);

  useEffect(() => {
    if(user.label){
      setLabelName(user.label);
    }

    getCollections().then((collections) => {
      if (collections && collections.labels) {
        setLabels(collections.labels);
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
