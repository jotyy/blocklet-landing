import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';

import { LoginDTO, RegisterDTO, UpdateUserDTO, User, db } from '../data';
import { SALT_ROUNDS } from '../libs/constants';
import { NotFoundError, PasswordNotMatchError, UserAlreadyExistsError } from '../libs/errors';
import { generateToken } from '../libs/jwt';

class UserService {
  async login(loginDTO: LoginDTO) {
    const user = await db.getUserByEmail(loginDTO.email);

    if (!user) {
      throw new NotFoundError('users');
    }

    const isPasswordCorrect = await bcrypt.compare(loginDTO.password, user.password);
    if (!isPasswordCorrect) {
      throw new PasswordNotMatchError();
    }

    const token = generateToken(user);

    return { user, token };
  }

  async register(registerDTO: RegisterDTO) {
    const user = await db.getUserByEmail(registerDTO.email);

    if (user) {
      throw new UserAlreadyExistsError();
    }

    const encryptedPassword = await bcrypt.hash(registerDTO.password, SALT_ROUNDS);
    const newUser = { ...registerDTO, id: nanoid(), password: encryptedPassword } as User;

    await db.createUser(newUser);
    const token = generateToken(newUser);

    return { user: newUser, token };
  }

  async update(updateUserDTO: UpdateUserDTO) {
    await db.updateUser(updateUserDTO);

    const user = await db.getUserById(updateUserDTO.id);
    const token = generateToken(user);

    return { user, token };
  }
}

const userService = new UserService();

export default userService;
