// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import Toast from './components/Toast';
import Loading from './components/Loading';

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(Toast);
Vue.use(Loading);
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});

export default function hello () {
  console.log('hello')
}
