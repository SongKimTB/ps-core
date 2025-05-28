import {  createStore } from "vuex";
import { IUser } from '../models';

interface IUserStoreState {
  user: IUser | null;
  token: string | null;
}

export const authStore = createStore<IUserStoreState>({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    SET_USER(state, user: IUser) {
      state.user = user;
    },
    SET_TOKEN(state, token: string) {
      state.token = token;
    },
    CLEAR_AUTH(state) {
      state.user = null;
      state.token = null;
    },
  },
  actions: {
    login({ commit }: { commit: any }, { user, token }: { user: IUser; token: string }) {
      commit('SET_USER', user);
      commit('SET_TOKEN', token);
    },
    logout({ commit }: { commit: any }) {
      commit('CLEAR_AUTH');
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    user: (state) => state.user,
  },
});
