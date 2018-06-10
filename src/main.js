import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(Vuex);

import storeConfig from './store/index';

const store = new Vuex.Store(storeConfig);

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
