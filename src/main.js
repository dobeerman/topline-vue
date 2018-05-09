// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import Vuex from 'vuex';
import VueResource from 'vue-resource';
// import { sync } from 'vuex-router-sync';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import DateFilter from './filters/date';
import App from './App';
import router from './router';
// import store from './store';

Vue.use(Vuetify);
Vue.use(VueResource);
Vue.filter('date', DateFilter);
// sync(store, router);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  components: { App },
  template: '<App/>',
});
