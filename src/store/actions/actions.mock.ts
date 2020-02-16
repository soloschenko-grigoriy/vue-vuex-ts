import { ICreateCommentActionPayload, IActionsMock } from './actions.types'
import { ActionContext } from 'vuex'
import { IState, IRootState } from '../store.types'
import { mockRootState, mockState } from '../store.mock'
import { mockGetters } from '../getters'
import { mockComment } from '@/entities'

export const mockActionsContext = (): ActionContext<IState, IRootState> => ({
  commit: jest.fn(),
  dispatch: jest.fn(),
  state: mockState(),
  getters: mockGetters(),
  rootState: mockRootState(),
  rootGetters: {}
})

export const mockCreateCommentActionPayload = (articleId = 0, comment = mockComment()[0]): ICreateCommentActionPayload => ({
  articleId,
  comment
})

export const mockActions = (): IActionsMock => ({
  fetchArticles: jest.fn(),
  createComment: jest.fn()
})
