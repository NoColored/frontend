import { SignUpInfo } from '@/types/auth';
import * as constants from '@/pages/landing/logIn/constants';

export const checkSignUpInfo = (signUpInfo: SignUpInfo) => {
  const { id, password, passwordConfirm, nickname } = signUpInfo;

  if (
    id.trim() === '' ||
    password.trim() === '' ||
    passwordConfirm.trim() === '' ||
    nickname.trim() === ''
  ) {
    return constants.BLANK_MESSAGE;
  }

  if (password !== passwordConfirm) {
    return constants.NOT_SAME_PASSWORD_MESSAGE;
  }

  if (
    id.length < 6 ||
    id.length > 20 ||
    password.length < 6 ||
    password.length > 20 ||
    nickname.length < 2 ||
    nickname.length > 9
  ) {
    return constants.INVALID_INPUT_MESSAGE;
  }

  return '';
};
