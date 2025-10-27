import { useNavigate } from 'react-router-dom';

import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton/index';

import { useLogin } from '@/features/auth';
import { ROUTE } from '@/shared/constants';

const Landing = () => {
  const navigate = useNavigate();
  const { guestLogin } = useLogin();

  const clickLogIn = () => {
    navigate(ROUTE.login);
  };

  return (
    <div className={styles.contentWrapper}>
      <img
        className={styles.logoImage}
        src='/images/landing-logo-whiteborder-h800w1280.png'
        alt='NoColored Logo'
      />
      <div className={styles.buttonWrapper}>
        <ColoredButton
          text='GUEST'
          color='gray300'
          size='large'
          onClick={guestLogin}
        />
        <ColoredButton
          text='LOG IN'
          color='pink'
          size='large'
          onClick={clickLogIn}
        />
      </div>
    </div>
  );
};

export default Landing;
