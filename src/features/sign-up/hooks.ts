import { useQueryClient } from '@tanstack/react-query';

import { registerMember, upgradeToMember } from './api';

import { userQueryKey } from '@/models/user';

export const useSignUp = (isGuest: boolean) => {
  const queryClient = useQueryClient();

  if (!isGuest) {
    return registerMember;
  }

  return async (formData: SignUpForm) => {
    const isSuccess = await upgradeToMember(formData);
    if (isSuccess) {
      await queryClient.invalidateQueries({ queryKey: userQueryKey });
    }
    return isSuccess;
  };
};
