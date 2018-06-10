import Vue from 'vue';
import Axios from 'axios';

const baseUrl = 'http://localhost:3000';

export default {
  namespaced: true,
  state     : {
    entities: {},
  },
  getters   : {
    entity  : (state) => (id) => {
      return state.entities[id] ? state.entities[id] : null;
    },
    entities: (state) => {
      const entities = [];

      Object.entries(state.entities).forEach((entry) => {
        entities.push(entry[1]);
      });

      return entities;
    },
    resource() {
      return 'users'
    }
  },
  mutations : {
    entity(state, entity) {
      const newEntity = Object.assign(
        state.entities[entity.id] || {},
        entity
      );

      Vue.set(state.entities, entity.id, newEntity);
    },
    entities(state, entities) {
      state.entities = entities;
    }
  },
  actions   : {
    deleteOne(context, entity) {
      const url = `${baseUrl}/${context.getters.resource}/${entity.id}`;

      return Axios.delete(url);
    },
    loadMany(context) {
      context.commit('entities', {});

      const url = `${baseUrl}/${context.getters.resource}`;

      return Axios.get(url)
        .then((resp) => {
          resp.data.forEach((entity) => {
            context.commit('entity', entity);
          });
        });
    },
    postOne(context, entity) {
      const url = `${baseUrl}/${context.getters.resource}`;

      return Axios.post(url, entity)
        .then((resp) => {
          context.commit('entity', resp.data);
        });
    },
  },
};
