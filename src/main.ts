import Vue from 'vue'
import { makeStore } from './store'
import { App, router, vuetify } from './ui'
import { prepareStorage, prepareServices } from './ui/plugins'

Vue.config.productionTip = false

const store = makeStore()

prepareStorage(store)
prepareServices(store)

new Vue({
  router,
  store,
  vuetify,
  render: (h): Vue.VNode => h(App)
}).$mount('#app')
