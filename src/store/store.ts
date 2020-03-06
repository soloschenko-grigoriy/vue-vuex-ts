import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'
import { IState } from './store.types'

Vue.use(Vuex)

export const makeStore = (): Store<IState> => new Vuex.Store<IState>({
  state: {
    articles: [],
    version: 1
  },
  actions,
  mutations,
  getters
})
