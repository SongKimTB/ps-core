import { AccountType } from '../enums';

export interface IUser {
  id: number;
  username: string;
  email?: string;
  password: string;
  accountType: AccountType;
  createdAt: Date;
}