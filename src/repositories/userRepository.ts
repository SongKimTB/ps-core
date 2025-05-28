import { fetchUser, createUser } from '../services';
import { IUser } from '../models';

export class UserRepository {
  async getUser(userId: string): Promise<IUser> {
    try {
      const user = await fetchUser(userId);
      return user;
    } catch (error: any) {
      throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }
  async saveUser(userData: Partial<IUser>): Promise<IUser> {
    try {
      const user = await createUser(userData);
      return user;
    } catch (error: any) {
      throw new Error(`Failed to save user: ${error.message}`);
    }
  }
}