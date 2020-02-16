import Vue from 'vue'
import { provider } from '@/services'
import { IStore } from '@/store'

export const prepareServices = (store: IStore): void => {
  store.$services = provider()

  Vue.mixin({
    beforeCreate () {
      this.$services = store.$services
    }
  })
}
