import ColoredButton from '@/components/button/ColoredButton/index.tsx';
import InputTextBox from '@/components/InputTextBox/index.tsx';

import { buttonWrapper } from '@/pages/landing/index.css.ts';

interface Props {
  closeModal: () => void;
}
const SignUp = ({ closeModal }: Props) => {
  return (
    <>
      <InputTextBox placeholder='아이디' size='medium' onChange={() => {}} />
      <InputTextBox placeholder='비밀번호' size='medium' onChange={() => {}} />
      <InputTextBox
        placeholder='비밀번호 확인'
        size='medium'
        onChange={() => {}}
      />
      <InputTextBox placeholder='닉네임' size='medium' onChange={() => {}} />
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
