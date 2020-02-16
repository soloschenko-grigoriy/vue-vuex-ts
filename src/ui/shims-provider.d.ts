/* eslint-disable @typescript-eslint/interface-name-prefix */
import { IProvider } from '@/services'
import { IStorage } from '@/store'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    storage?: IStorage
    services?: IProvider
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $storage: IStorage
    $services: IProvider
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $storage: IStorage
    $services: IProvider
  }
}
