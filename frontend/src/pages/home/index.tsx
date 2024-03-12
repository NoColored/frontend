import * as styles from './index.css.ts';

import BasicContentFrame from '@/components/BasicContentFrame/index.tsx';

const Home = () => {
  return (
    <BasicContentFrame backButtonLable='뒤로'>
      <div>
        <div
          className={styles.fontStyle({ fontType: 'textFont', color: 'red' })}
        >
          This is text with the DNFBitBitv2 font. 전체적인 기본 폰트에요
        </div>
        <div
          className={styles.fontStyle({ fontType: 'numFont', color: 'yellow' })}
        >
          This is text with the PixelAEBold font. 0123456789
        </div>
        <div
          className={styles.fontStyle({
            fontType: 'loadingTextFont',
            color: 'blue',
          })}
        >
          This is text with the DOSPilgiMedium font. 로딩화면에 쓰여요
        </div>
        <div
          className={styles.fontStyle({
            fontType: 'loadingNumFont',
            color: 'pink',
          })}
        >
          This is text with the Chonkly font. 0123456789
        </div>
      </div>
    </BasicContentFrame>
  );
};

export default Home;
