type SignUpForm = Account & {
  passwordConfirm: Account['password'];
  nickname: User['nickname'];
};
