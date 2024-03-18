import ColoredButton from '@/components/button/ColoredButton/index';
import InputTextBox from '@/components/textbox/InputTextBox/index';

import { buttonWrapper } from '@/pages/landing/index.css';

interface Props {
  closeModal: () => void;
}

const SignUp = ({ closeModal }: Props) => {
  return (
    <>
      <InputTextBox
        type='text'
        placeholder='아이디'
        size='medium'
        onChange={() => {}}
      />
      <InputTextBox
        type='password'
        placeholder='비밀번호'
        size='medium'
        onChange={() => {}}
      />
      <InputTextBox
        type='password'
        placeholder='비밀번호 확인'
        size='medium'
        onChange={() => {}}
      />
      <InputTextBox
        type='text'
        placeholder='닉네임'
        size='medium'
        onChange={() => {}}
      />
      <div className={buttonWrapper}>
        <ColoredButton
          text='취소'
          color='navy'
          size='small'
          onClick={closeModal}
        />
        <ColoredButton
          text='가입'
          color='blue'
          size='small'
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default SignUp;
