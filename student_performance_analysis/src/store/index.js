import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export const store = createStore({
  state: {
    user:  JSON.parse(localStorage.getItem('user')) || null
  },
  mutations: {
    setUser(state, new_user) {
      state.user = new_user;
   
      localStorage.setItem('user', JSON.stringify(new_user));
    }
  },
  actions: {
    updateUser({ commit }, new_user) {
        console.log("Aici")
      commit('setUser', new_user);
    }
  },
  getters: {
    getUser: (state) => state.user
  },
  plugins: [createPersistedState()]
});