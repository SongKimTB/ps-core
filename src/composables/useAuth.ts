import { useRouter } from 'vue-router';
import { authStore } from '../stores';
import { product } from '../routes'
import { login as userServiceLogin } from '../services/userService';

export const useAuth = () => {
  const router = useRouter();
  const login = async (username: string, password: string) => {
    try {
      const { token, user } = await userServiceLogin(username, password);
      authStore.dispatch('login', { user, token });
      router.push(product.PROMOTION);
      return user;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };
  const logout = () => {
    authStore.dispatch('logout');
  };

  return { login, logout, user: authStore.getters.user };
};