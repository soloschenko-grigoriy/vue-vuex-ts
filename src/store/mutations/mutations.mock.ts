import { IMutationsMock } from './mutations.types'

export const mockMutations = (): IMutationsMock => ({
  fetchArticles: jest.fn(),
  createComment: jest.fn()
})
