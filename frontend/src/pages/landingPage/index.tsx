import { useNavigate } from 'react-router-dom';

import {
  buttonWrapper,
  clickText,
  etcWrapper,
  guestButton,
  landingWrapper,
  logInButton,
} from '@/pages/landingPage/index.css.ts';

const LandingPage = () => {
  const navigate = useNavigate();
  const landingLogo: string =
    '/public/images/landing-logo-whiteborder-h800w1280.png';
  return (
    <div className={landingWrapper}>
      <div className={etcWrapper}>
        <img src={landingLogo} alt='로고로고' style={{ width: '50%' }} />
        <div className={buttonWrapper}>
          <button
            className={guestButton}
            type='submit'
            onClick={() => {
              navigate('/');
            }}
          >
            GUEST
          </button>
          <button
            className={logInButton}
            type='submit'
            onClick={() => {
              navigate('/');
            }}
          >
            LOG IN
          </button>
        </div>
        <span className={clickText}>click to start!</span>
      </div>
    </div>
  );
};
export default LandingPage;
