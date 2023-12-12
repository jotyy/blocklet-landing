export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface RegisterParams {
  name: string;
  email: string;
  password: string;
}

export interface UpdateProfileParams {
  id: string;
  name?: string;
  email?: string;
  avatar?: string;
  bio?: string;
}
