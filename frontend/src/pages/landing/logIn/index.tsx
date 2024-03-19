import ColoredButton from '@/components/button/ColoredButton/index';
import InputTextBox from '@/components/textbox/InputTextBox/index';

import useModal from '@/hooks/useModal';

import * as styles from '@/pages/landing/index.css';
import SignUp from '@/pages/landing/logIn/SignUp';

const LogIn = () => {
  const { Modal, openModal, closeModal } = useModal();
  const signUpClickEvent = () => {
    openModal();
  };

  return (
    <div className={styles.contentWrapper}>
      {/* onChange 임시 이벤트 익명 함수로 설정 했습니다. */}
      <InputTextBox
        type='text'
        placeholder='아이디'
        size='large'
        onChange={() => {}}
      />
      <InputTextBox
        type='password'
        placeholder='비밀번호'
        size='large'
        onChange={() => {}}
      />
      <div className={styles.buttonWrapper}>
        <ColoredButton
          text='SIGN UP'
          color='blue'
          size='large'
          onClick={signUpClickEvent}
        />
        <ColoredButton
          text='LOG IN'
          color='pink'
          size='large'
          onClick={() => {}}
        />
      </div>
      <Modal>
        <SignUp closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default LogIn;
