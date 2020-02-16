import Vue from 'vue'
import { App, router, vuetify } from './ui'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: (h): Vue.VNode => h(App)
}).$mount('#app')
