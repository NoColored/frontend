import * as constants from './constants';
import * as styles from './index.css';

import ColoredButton from '@/components/button/ColoredButton';

import useModal from '@/hooks/useModal';

import SignUp from '@/pages/landing/logIn/SignUp';

const SignupBanner = () => {
  const { Modal, openModal, closeModal } = useModal();

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
        onClick={openModal}
      />
      <Modal>
        <SignUp closeModal={closeModal} />
      </Modal>
    </div>
  );
};
export default SignupBanner;
