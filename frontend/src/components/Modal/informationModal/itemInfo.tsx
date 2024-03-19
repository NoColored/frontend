import { useState } from 'react';
import * as Styles from './index.css';
import RoundCornerImageBox from '@/components/imagebox/RoundCornerImageBox';
import { ITEMS } from '@/components/Modal/informationModal/constants';
import SettingNavigationButton from '@/components/button/SettingNavigationButton';

const ItemInfo = () => {
  const [idx, setIdx] = useState(0);

  const itemsArray = Object.values(ITEMS);

  const showPreviousItem = () => {
    setIdx((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const showNextItem = () => {
    setIdx((prevIndex) => Math.min(prevIndex + 1, itemsArray.length - 1));
  };

  return (
    <div>
      <SettingNavigationButton label='뒤로' />
      <div className={Styles.text}>아이템</div>
      <div className={Styles.boxWrapper}>
        <div className={Styles.textMargin}>{itemsArray[idx].title}</div>
        <RoundCornerImageBox
          size='medium'
          imgSrc={`src/assets/items/item-${Object.keys(ITEMS)[idx]}-h32w32.png`}
          borderColor='black'
          borderSize='5x'
        />
        <pre className={Styles.textMargin}>{itemsArray[idx].description}</pre>
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
          {idx + 1} / {itemsArray.length}
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
