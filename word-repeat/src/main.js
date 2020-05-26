import Vue from 'vue'
import App from './App.vue'

import menubar from './components/menubar';
import backgroundTemplate from './components/backgroundTemplate'

Vue.component('menubar', menubar);
Vue.component('backgroundTemplate', backgroundTemplate);

new Vue({
  el: '#app',
  render: h => h(App)
})
