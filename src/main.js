import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'src/assets/css/styles.css'
import '@fortawesome/fontawesome-free/css/all.css'
import VueGtag from 'vue-gtag'


Vue.use(VueGtag, {
  config: { id: "UA-175337381-1" }
}, router)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
