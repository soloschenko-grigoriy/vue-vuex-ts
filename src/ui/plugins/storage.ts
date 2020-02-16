import Vue from 'vue'
import { makeStorage, IStore } from '@/store'

export const prepareStorage = (store: IStore): void => {
  store.$storage = makeStorage(store)

  Vue.mixin({
    beforeCreate () {
      this.$storage = store.$storage
    }
  })
}
