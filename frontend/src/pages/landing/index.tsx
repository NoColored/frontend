import { useNavigate } from 'react-router-dom';

import * as constants from "./constants";
import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton/index';

import FullscreenPrompt from "@/pages/landing/FullScreenPrompt";

import { getGuestLogin } from '@/services/auth';
import { setFullScreen } from '@/services/landing';

import { ROUTE } from '@/router/constants';

import useAudioStore from "@/states/music";

const Landing = () => {
  const navigate = useNavigate();
  const { isPlaying, play, stop } = useAudioStore();

  const clickGuestLogin = async () => {
    return getGuestLogin().then((isSuccess) => {
      if (isSuccess) {
        isPlaying ? play() : stop();
        navigate(ROUTE.home);
        setFullScreen();
        return;
      }
      console.log('Guest 로그인 실패');
      navigate(`${ROUTE.error}/500`);
    });
  };

  const clickLogIn = () => {
    isPlaying ? play() : stop();
    navigate('/login');
  };

  const landingLogo: string = constants.LANDING_LOGO_URL;
  return (
    <div className={styles.contentWrapper}>
      <FullscreenPrompt />
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
