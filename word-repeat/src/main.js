import Vue from 'vue'
import App from './App.vue'
import menubar from './components/menubar';

Vue.component('menubar', menubar);

new Vue({
  el: '#app',
  render: h => h(App)
})
