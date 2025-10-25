import { ERROR_MESSAGE } from '@/constants';

export const checkSignUpInfo = ({
  id,
  password,
  passwordConfirm,
  nickname,
}: SignUpForm) => {
  if (
    id.trim() === '' ||
    password.trim() === '' ||
    passwordConfirm.trim() === '' ||
    nickname.trim() === ''
  ) {
    return ERROR_MESSAGE.blank;
  }

  if (password !== passwordConfirm) {
    return ERROR_MESSAGE.notSamePassword;
  }

  if (
    id.length < 6 ||
    id.length > 20 ||
    password.length < 6 ||
    password.length > 20 ||
    nickname.length < 2 ||
    nickname.length > 9
  ) {
    return ERROR_MESSAGE.invalidInput;
  }

  return '';
};
