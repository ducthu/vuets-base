import Vue, { CreateElement } from 'vue'
import router from './router'
import store from './store'
import App from './app';
import { VNode } from 'vue/types/umd';

new Vue({
  router,
  store,
  render: (h: CreateElement): VNode => h(App)
}).$mount('#main');