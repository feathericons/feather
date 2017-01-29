import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';

const icons = [
  'square',
  'circle',
  'rectangle-vertical',
  'rectangle-horizontal'
];

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    icons
  }
});

new Vue({
  el: '#app',
  store,
  components: {App},
  template: '<app/>'
});