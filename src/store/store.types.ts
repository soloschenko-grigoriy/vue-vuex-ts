import { IArticle } from '@/entities'
import { Store } from 'vuex'
import { IActionsMock } from './actions'
import { IMutationsMock } from './mutations'
import { IProviderMock } from '@/services'
import { IStorageMock } from './storage'
import { IGettersMock } from './getters'

export interface IRootState {
  version: number
}

export interface IState extends IRootState {
  articles: IArticle[]
}

export type IStore = Store<IState>

export interface IStoreMock extends IStore {
  state: IState
  actions: IActionsMock
  mutations: IMutationsMock
  getters: IGettersMock
  $services: IProviderMock
  $storage: IStorageMock
}
