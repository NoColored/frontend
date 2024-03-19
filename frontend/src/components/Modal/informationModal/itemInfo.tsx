import { useState } from 'react';
import * as Styles from './index.css';
import { ITEMS } from '@/components/Modal/informationModal/constants';
import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';
import SettingNavigationButton from '@/components/button/SettingNavigationButton';

const ItemInfo = () => {
  const [idx, setIdx] = useState(0);

  const showPreviousItem = () => {
    setIdx((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const showNextItem = () => {
    setIdx((prevIndex) => Math.min(prevIndex + 1, ITEMS.length - 1));
  };

  return (
    <div>
      <SettingNavigationButton label='뒤로' />
      <div className={Styles.text}>아이템</div>
      <div className={Styles.boxWrapper}>
        <div className={Styles.textMargin}>{ITEMS[idx].title}</div>
        <RoundCornerImageBox
          size='medium'
          imgSrc={`src/assets/items/item-${ITEMS[idx].name}-h32w32.png`}
          borderColor='black'
          borderSize='5x'
        />
        <pre className={Styles.textMargin}>{ITEMS[idx].description}</pre>
      </div>
      <div className={Styles.buttonWrapper}>
        <button
          type='button'
          onClick={showPreviousItem}
          className={Styles.buttonBorderStyle}
        >
          이전
        </button>
        <div id='아이템번호'>
          {idx + 1} / {ITEMS.length}
        </div>
        <button
          type='button'
          onClick={showNextItem}
          className={Styles.buttonBorderStyle}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default ItemInfo;
