import { Database } from '@blocklet/sdk';

import { UpdateUserDTO } from './dto';
import { Row, TABLE, User } from './schema';

/**
 * MyDatabase
 * @description Database wrapper class
 * @class MyDatabase
 * @example
 * import MyDatabase from './data/db';
 *
 * const db = new MyDatabase();
 * const profile = await db.getUserById('123');
 */
export default class MyDatabase {
  private userStore: Database<User>;

  constructor() {
    this.userStore = new Database(TABLE.USER);
  }

  /**
   * Create user to database
   * @param newUser
   * @returns new user
   */
  createUser(newUser: User): PromiseLike<Row<User>> {
    return this.userStore.insert(newUser);
  }

  /**
   * Update user to database
   * @param profile
   * @returns new profile
   */
  async updateUser(updateUserDTO: UpdateUserDTO) {
    const { id } = updateUserDTO;
    const user = await this.getUserById(id);
    const newProfile = { ...user, ...updateUserDTO };
    return this.userStore.update({ _id: id }, { $set: { ...newProfile } });
  }

  /**
   * Get user from database
   * @param id user id
   * @returns user
   */
  getUserById(id: string): PromiseLike<Row<User>> {
    return this.userStore.findOne({ _id: id });
  }

  /**
   * Get user from database
   * @param email user email
   * @returns user
   */
  getUserByEmail(email: string): PromiseLike<Row<User>> {
    return this.userStore.findOne({ email });
  }
}
