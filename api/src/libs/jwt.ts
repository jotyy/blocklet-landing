import jwt from 'jsonwebtoken';

import { UserRow } from '../data';

// Warning: This is not a secure way to store secret!
export const jwtSecret = 'blocklet-secret-2023';

export const generateToken = (user: UserRow) => {
  const payload = {
    id: user._id,
    email: user.email,
    name: user.name,
    avatar: user.avatar || '',
    bio: user.bio || '',
  };
  return jwt.sign(payload, jwtSecret, { expiresIn: '1d' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, jwtSecret);
};

export const decodeToken = (token: string) => {
  return jwt.decode(token);
};
