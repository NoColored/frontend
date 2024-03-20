import { useState } from 'react';

import * as styles from './index.css';

import { ITEMS } from '@/components/BasicContentFrame/WithButtons/InformationModal/constants';
import SettingNavigationButton from '@/components/button/SettingNavigationButton';
import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';

const ItemInfo = () => {
  const [idx, setIdx] = useState(0);

  const imgUrl = `/src/assets/items/item-${ITEMS[idx].name}-h32w32.png`;

  const showPreviousItem = () => {
    setIdx((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const showNextItem = () => {
    setIdx((prevIndex) => Math.min(prevIndex + 1, ITEMS.length - 1));
  };

  return (
    <div>
      <SettingNavigationButton label='뒤로' />
      <div className={styles.text}>아이템</div>
      <div className={styles.boxWrapper}>
        <div className={styles.textMargin}>{ITEMS[idx].title}</div>
        <RoundCornerImageBox
          size='medium'
          imgSrc={imgUrl}
          borderColor='black'
          borderSize='5x'
        />
        <pre className={styles.textMargin}>{ITEMS[idx].description}</pre>
      </div>
      <div className={styles.buttonWrapper}>
        <button
          type='button'
          onClick={showPreviousItem}
          className={styles.buttonBorderStyle}
        >
          이전
        </button>
        <div id='아이템번호'>
          {idx + 1} / {ITEMS.length}
        </div>
        <button
          type='button'
          onClick={showNextItem}
          className={styles.buttonBorderStyle}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default ItemInfo;
