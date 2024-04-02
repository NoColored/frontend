import { useState } from 'react';

import * as styles from './index.css';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons';
import SettingTextButton from '@/components/button/SettingTextButton';

import Info from '@/pages/tutorial/Info';

const MAX_PAGE = 1;

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
      if (prev < MAX_PAGE) {
        return prev + 1;
      }
      return prev;
    });
  };

  return (
    <BasicContentFrame disableButton>
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
            colorStyle={page < MAX_PAGE ? 'black' : 'gray'}
            onClick={nextPage}
          >
            {`>`}
          </SettingTextButton>
        </div>
      </div>
    </BasicContentFrame>
  );
};

export default Tutorial;
