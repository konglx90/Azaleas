// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import toast from './components/Toast';

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(toast);
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});

export default function hello () {
  console.log('hello')
}
