import { IState, IRootState, IStoreMock } from './store.types'
import { mockArticles } from '@/entities'
import { mockActions } from './actions/actions.mock'
import { mockMutations } from './mutations/mutations.mock'
import { mockProvider } from '@/services'
import { mockStorage } from './storage'
import { mockGetters } from './getters'

export const mockRootState = (): IRootState => ({
  version: 0
})

export const mockState = (): IState => ({
  articles: mockArticles(),
  version: 0
})

export const mockStore = (): IStoreMock => ({
  state: mockState(),
  actions: mockActions(),
  mutations: mockMutations(),
  getters: mockGetters(),
  $storage: mockStorage(),
  $services: mockProvider(),
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
