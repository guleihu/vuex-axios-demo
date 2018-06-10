import Vue from 'vue';
import Axios from 'axios';

const baseUrl = 'http://localhost:3000';

export default {
  state    : {
    users: {},
  },
  getters  : {
    user : (state) => (id) => {
      return state.users[id] ? state.users[id] : null;
    },
    users: (state) => {
      const users = [];

      Object.entries(state.users).forEach((entry) => {
        users.push(entry[1]);
      });

      return users;
    },
  },
  mutations: {
    user(state, user) {
      const newUser = Object.assign(
        state.users[user.id] || {},
        user
      );

      Vue.set(state.users, user.id, newUser);
    },
    users(state, users) {
      state.users = users;
    }
  },
  actions  : {
    deleteUser(context, user) {
      const url = `${baseUrl}/users/${user.id}`;

      return Axios.delete(url);
    },
    loadUsers(context) {
      context.commit('users', {});

      const url = `${baseUrl}/users`;

      return Axios.get(url)
        .then((resp) => {
          resp.data.forEach((user) => {
            context.commit('user', user);
          });
        });
    },
    postUser(context, user) {
      const url = `${baseUrl}/users`;

      return Axios.post(url, user)
        .then((resp) => {
          context.commit('user', resp.data);
        });
    },
  },
};
