import { z } from 'zod';

import { User } from './schema';

export type CreateUserDTO = Omit<User, '_id'>;
export type UpdateUserDTO = Partial<CreateUserDTO> & { id: string };
export type LoginDTO = Pick<User, 'email' | 'password'>;
export type RegisterDTO = Pick<User, 'name' | 'email' | 'password'>;

export const createUserValidator = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(8).max(255),
});

export const updateUserValidator = createUserValidator.partial().extend({
  id: z.string().length(16),
});

export const loginValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(255),
});

export const registerValidator = loginValidator.extend({
  name: z.string().min(3).max(255),
});
