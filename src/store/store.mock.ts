import { IState, IRootState, IStoreMock } from './store.types'
import { mockArticles } from '@/entities'
import { mockActions } from './actions'
import { mockMutations } from './mutations'
import { mockGetters } from './getters'
import { mockProvider } from '@/services'
import { mockStorage } from './storage'

export const mockRootState = (): IRootState => ({
  version: 0
})

export const mockState = (): IState => ({
  articles: mockArticles(),
  version: 0
})

export const mockStore = (): IStoreMock => ({
  $storage: mockStorage(),
  $services: mockProvider(),
  state: mockState(),
  actions: mockActions(),
  mutations: mockMutations(),
  getters: mockGetters(),
  replaceState: jest.fn(),
  dispatch: jest.fn(),
  commit: jest.fn(),
  subscribe: jest.fn(),
  subscribeAction: jest.fn(),
  watch: jest.fn(),
  registerModule: jest.fn(),
  unregisterModule: jest.fn(),
  hotUpdate: jest.fn()
})
