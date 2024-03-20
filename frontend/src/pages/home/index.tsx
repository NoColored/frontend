import * as styles from './index.css';

import BasicContentFrame from '@/components/BasicContentFrame/WithButtons/index';
import ColoredIconButton from '@/components/button/ColoredIconButton';

const Home = () => {
  return (
    <BasicContentFrame>
      <div className={styles.LeftSideWrapper}>
        <div>경험치 바</div>
        <div className={styles.LeftAndCharacterWrapper}>
          <div className={styles.LeftButtonsWrapper}>
            <ColoredIconButton
              icon='/images/ui/icon/button/icon-button-collection-h50w50.png'
              size='medium'
              text='Collection'
              color='blue'
              onClick={() => {}}
            />
            <ColoredIconButton
              icon='/images/ui/icon/button/icon-button-ranking-h50w50.png'
              size='medium'
              text='Ranking'
              color='green'
              onClick={() => {}}
            />
          </div>
          <div>캐릭터요</div>
        </div>
      </div>
    </BasicContentFrame>
  );
};

export default Home;
