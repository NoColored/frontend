import * as styles from './index.css.ts';

import ColoredButton from '@/components/button/ColoredButton/index.tsx';

const Landing = () => {
  const landingLogo: string =
    '/public/images/landing-logo-whiteborder-h800w1280.png';
  return (
    <div className={styles.logoBox}>
      <img src={landingLogo} alt='로고로고' style={{ width: '50%' }} />
      <div className={styles.buttonBox}>
        <ColoredButton
          text='GUEST'
          color='gray300'
          size='large'
          onClick={() => {}}
        />
        <ColoredButton
          text='LOG IN'
          color='pink'
          size='large'
          onClick={() => {}}
        />
      </div>
      <span className={styles.clickText}>click to start!</span>
    </div>
  );
};

export default Landing;
