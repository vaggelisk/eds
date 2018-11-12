import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App, axios, VueAxios),
}).$mount('#app');



