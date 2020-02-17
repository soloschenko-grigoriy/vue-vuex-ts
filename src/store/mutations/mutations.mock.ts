import { IMutationsMock, IMutationsCreateCommentMutationPayload } from './mutations.types'
import { mockCommentsData, mockArticles } from '@/entities'

export const mockMutations = (): IMutationsMock => ({
  fetchArticles: jest.fn(),
  createComment: jest.fn()
})

export const mockCreateCommentMutationPayload = (article = mockArticles()[0], comment = mockCommentsData()[0]): IMutationsCreateCommentMutationPayload => ({
  article,
  comment
})
