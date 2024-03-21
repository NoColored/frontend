import * as constants from './constants';
import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';

const SignupBanner = () => {
  return (
    <div className={styles.SignupBannerBox}>
      <div
        style={{
          backgroundImage: `url(${constants.SIGNUP_BANNER_IMAGE})`,
        }}
        className={styles.SignupBannerCharacterBox}
      />
      <div className={styles.SignupBannerText}>
        {constants.SIGNUP_BANNER_TEXT}
      </div>
      <ColoredButton
        size='xsmall'
        text='바로가입'
        color='yellow'
        onClick={() => {}}
      />
    </div>
  );
};
export default SignupBanner;
