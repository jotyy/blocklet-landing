import axios from '@/libs/api';
import storage from '@/libs/storage';

import { AuthResponse, LoginParams, RegisterParams, UpdateProfileParams, User } from './types';

export const getUser = async (): Promise<{ user: User | undefined }> => {
  try {
    const response = await axios.get<User>('/api/users/me');
    if (response.status === 401) {
      return { user: undefined };
    }
    const { data } = response;

    return { user: data };
  } catch (error) {
    return { user: undefined };
  }
};

export const login = async (params: LoginParams): Promise<User> => {
  const res = await axios.post<AuthResponse>('/api/login', params);
  storage.setToken(res.data.token);
  return res.data.user;
};

export const register = async (params: RegisterParams): Promise<User> => {
  const res = await axios.post<AuthResponse>('/api/register', params);
  storage.setToken(res.data.token);
  return res.data.user;
};

export const logout = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      storage.clearToken();
      resolve();
    }, 1000);
  });
};

export const updateProfile = async (params: UpdateProfileParams): Promise<User> => {
  const res = await axios.put<AuthResponse>(`/api/users?id=${params.id}`, params);
  storage.setToken(res.data.token);
  return res.data.user;
};

export const userFn = async () => {
  const { user } = await getUser();
  return user ?? null;
};
