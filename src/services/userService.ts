import axios from 'axios';
import { IUser } from '../models';
import { AccountType } from '../enums';
import { API_BASE_URL } from '../constants';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchUser = async (userId: string): Promise<IUser> => {
  const response = await apiClient.get(`/users/${userId}`);
  return response.data;
};

export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
  const response = await apiClient.post('/users', userData);
  return response.data;
};

export const login = async (username: string, password: string): Promise<{ token: string; user: IUser }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeToken = `fake-jwt-token-for-${username}`;
      const fakeUser: IUser = {
        id: 1,
        username: username,
        email: `${username}@example.com`,
        password: '********',
        accountType: AccountType.PLAYER,
        createdAt: new Date(),
      };
      resolve({ token: fakeToken, user: fakeUser });
    }, 1000);
  });
};