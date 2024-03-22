import { useRecoilState } from 'recoil';
import { userState } from '@/states/auth';
import { getIdCheck, postGuestSignUp, postSignUp } from '@/services/auth';
import { SignUpInfo } from '@/types/auth';

export const useSignUp = () => {
  const [user, setUser] = useRecoilState(userState);

  const signUp = async (signUpInfo: SignUpInfo) => {
    const idCheck = await getIdCheck(signUpInfo.id);
    if (!idCheck) {
      if (user?.guest) {
        const guestData = await postGuestSignUp(signUpInfo);
        if (guestData) {
          // 여기를 home API로 추후에 변경
          setUser(guestData);
          return true;
        }
      } else {
        await postSignUp(signUpInfo);
        return true;
      }
    }
    return false;
  };
  return { signUp };
};

export const checkSignUpInfo = (signUpInfo: SignUpInfo) => {
  const { id, password, passwordConfirm, nickname } = signUpInfo;

  if (
    id.trim() === '' ||
    password.trim() === '' ||
    passwordConfirm.trim() === '' ||
    nickname.trim() === ''
  ) {
    return '당신의 역사가 비어있네요? 수상합니다.';
  }

  if (password !== passwordConfirm) {
    return '암호가 일치하지 않습니다.';
  }

  if (
    id.length < 6 ||
    id.length > 20 ||
    password.length < 6 ||
    password.length > 20 ||
    nickname.length < 6 ||
    nickname.length > 20
  ) {
    return '당신의 정보가 너무 짧거나, 너무 길거나.';
  }

  return '';
};
