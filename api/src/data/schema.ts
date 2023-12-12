export const TABLE = {
  USER: 'users',
};

export type Row<T> = {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
} & T;

export type User = {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  bio?: string;
};

export type UserRow = Row<User>;
