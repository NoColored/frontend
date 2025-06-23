import { useState } from 'react';

import * as styles from './index.css';
import { indexProps } from './types';

import SettingNavigationButton from '@/components/button/SettingNavigationButton';
import SettingTextButton from '@/components/button/SettingTextButton';

import { MAX_PAGE_SIZE } from '@/pages/tutorial/constants';
import Info from '@/pages/tutorial/Info';

const $MAX_PAGE_SIZE = MAX_PAGE_SIZE - 1;

const GameInfo = ({ onBack, onClose }: indexProps) => {
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
      if (prev < $MAX_PAGE_SIZE) {
        return prev + 1;
      }
      return prev;
    });
  };

  return (
    <>
      <SettingNavigationButton
        label='뒤로'
        onClick={onBack}
        position='leftTop'
      />
      <SettingNavigationButton
        label='닫기'
        onClick={onClose}
        position='rightTop'
      />
      <div className={styles.gameInfoWrapper}>
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
            colorStyle={page < $MAX_PAGE_SIZE ? 'black' : 'gray'}
            onClick={nextPage}
          >
            {`>`}
          </SettingTextButton>
        </div>
      </div>
    </>
  );
};

export default GameInfo;
