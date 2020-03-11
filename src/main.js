import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import titleMixin from './util/title'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.mixin(titleMixin)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
