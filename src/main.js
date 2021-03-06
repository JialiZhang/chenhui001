import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import './assets/css/normalize.css'
import './assets/css/init.css'

Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
