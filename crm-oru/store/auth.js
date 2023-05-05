const state = () => ({
    token: null,
    user: null
});

const getters = {
  isAuthenticated: state => !!state.token
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setUser(state, user) {
    state.user = user;
  }
};

const actions = {
  login({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      const { user, token } = credentials;
      commit('setToken', token);
      commit('setUser', user);
      resolve(token);
    });
  },
  logout({ commit }) {
    commit('setToken', null);
    commit('setUser', null);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
