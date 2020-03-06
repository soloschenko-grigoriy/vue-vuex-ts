/* eslint-disable @typescript-eslint/interface-name-prefix */
import { IStorage } from '@/store'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    storage?: IStorage
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $storage: IStorage
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $storage: IStorage
  }
}
