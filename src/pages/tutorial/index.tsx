import { useState } from 'react';

import * as styles from './index.css';

import SettingTextButton from '@/components/button/SettingTextButton';

import { MAX_PAGE_SIZE } from '@/pages/tutorial/constants';
import Info from '@/pages/tutorial/Info';

const Tutorial = () => {
  const [page, setPage] = useState<number>(0);

  const prevPage = () => {
    setPage((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  const nextPage = () => {
    setPage((prev) => {
      if (prev < MAX_PAGE_SIZE) {
        return prev + 1;
      }
      return prev;
    });
  };

  return (
    <div className={styles.container}>
        <Info page={page} />
        <div className={styles.left}>
          <SettingTextButton
            size='xsmall'
            colorStyle={page > 0 ? 'black' : 'gray'}
            onClick={prevPage}
          >
            {`<`}
          </SettingTextButton>
        </div>
        <div className={styles.right}>
          <SettingTextButton
            size='xsmall'
            colorStyle={page < MAX_PAGE_SIZE ? 'black' : 'gray'}
            onClick={nextPage}
          >
            {`>`}
          </SettingTextButton>
        </div>
      </div>
  );
};

export default Tutorial;
