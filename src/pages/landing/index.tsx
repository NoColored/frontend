import { useNavigate } from 'react-router-dom';

import * as constants from './constants';
import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton/index';

import { getGuestLogin } from '@/services/auth';
import { setFullScreen } from '@/services/landing';

import { ROUTE } from '@/router/constants';

const Landing = () => {
  const navigate = useNavigate();

  const clickGuestLogin = async () => {
    return getGuestLogin().then((isSuccess) => {
      if (!isSuccess) {
        navigate(`${ROUTE.error}/500`);
        return;
      }
      navigate(ROUTE.tutorial);
      setFullScreen();
    });
  };

  const clickLogIn = () => {
    navigate(ROUTE.login);
  };

  const landingLogo: string = constants.LANDING_LOGO_URL;
  return (
    <div className={styles.contentWrapper}>
      <img
        className={styles.logoImage}
        src={landingLogo}
        alt='NoColored Logo'
      />
      <div className={styles.buttonWrapper}>
        <ColoredButton
          text='GUEST'
          color='gray300'
          size='large'
          onClick={clickGuestLogin}
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
