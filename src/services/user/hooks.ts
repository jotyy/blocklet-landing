import { useMutation } from '@tanstack/react-query';
import { configureAuth } from 'react-query-auth';

import { login, logout, register, updateProfile, userFn } from './api';

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth({
  userFn,
  loginFn: login,
  registerFn: register,
  logoutFn: logout,
});

interface UseUpdateProfileOptions {
  onSuccess?: () => void;
  onError?: () => void;
}

export const useUpdateProfile = ({ onSuccess, onError }: UseUpdateProfileOptions) => {
  const mutation = useMutation({
    mutationKey: ['updateUser'],
    mutationFn: updateProfile,
    onSuccess,
    onError,
  });

  return mutation;
};
