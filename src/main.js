import Vue        from 'vue'
import App        from './App.vue'
import router     from './router/index'
import titleMixin from './util/title'
import axios      from 'axios'
import Vuetify    from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faTwitter)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuetify)
const vuetify = new Vuetify()
Vue.mixin(titleMixin)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
