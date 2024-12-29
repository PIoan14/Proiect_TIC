import { getAuth } from 'firebase/auth';
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const auth = getAuth()
export const store = createStore({
  state: {
    us : auth.currentUser,
    user:  JSON.parse(localStorage.getItem('user')) || null,
    
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
    getUser: (state) => state.user,
    getUs :(state) => state.us
  },
  plugins: [createPersistedState()]
});